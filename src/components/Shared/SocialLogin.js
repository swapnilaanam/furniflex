"use client"

import Image from "next/image";

import googleIconImage from "@/assets/google-icon.svg";
import appleIconImage from "@/assets/apple-icon.svg";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
    const { signInGoogle } = useContext(AuthContext);

    const router = useRouter();

    const handleGoogleSignIn = () => {

        signInGoogle()
            .then(async (result) => {
                const loggedUser = result.user;

                const userInfo = {
                    email: loggedUser.email,
                    loginType: "Social"
                }

                try {
                    const response = await axios.post('https://furniflex-server-five.vercel.app/users', userInfo);

                    if (response?.status === 201) {
                        console.log("Data Saved Successfully!");
                    }
                } catch (error) {
                    console.log(error?.message);
                }

                toast.success("Signed In Successfully!");
                return router.push('/products');
            })
            .catch((error) => {
                console.log(error?.message);
            })
    };

    return (
        <div className="mt-[14px]">
            <div className="mx-[16.5px] h-[15.32px] flex justify-center items-center gap-[5px]">
                <div className="w-full h-0 border-2 border-[#F1F0F0]"></div>
                <div className="text-[12px] leading-[14.4px] font-medium">or</div>
                <div className="w-full h-0 border-2 border-[#F1F0F0]"></div>
            </div>
            <div className="mt-[14px] w-full flex justify-center items-center gap-[16px]">
                <div onClick={() => handleGoogleSignIn()} className="w-[218px] h-[52px] border border-[#D9D9D9] rounded-md cursor-pointer">
                    <div className="my-[14px] mx-[42px] w-[134px] flex justify-center items-center gap-[10px]">
                        <div className="relative w-6 h-6">
                            <Image fill={true} src={googleIconImage} alt="Google Icon" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="w-full text-[12px] font-medium leading-[14.4px]">
                            Sign in with Google
                        </h4>
                    </div>
                </div>
                <div className="w-[218px] h-[52px] border border-[#D9D9D9] rounded-md cursor-pointer">
                    <div className="my-[14px] mx-[42px] w-[134px] flex justify-center items-center gap-[10px]">
                        <div className="relative w-6 h-6">
                            <Image fill={true} src={appleIconImage} alt="Apple Icon" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="w-full text-[12px] font-medium leading-[14.4px]">
                            Sign in with Apple
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialLogin