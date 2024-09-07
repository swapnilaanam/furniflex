"use client";

import Image from "next/image";

import hideIconImage from "@/assets/hide-icon.svg";
import Link from "next/link";
import SocialLogin from "../Shared/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignInBox = () => {
    const [isPassShown, setIsPassShown] = useState(false);

    const { signInUser } = useContext(AuthContext);

    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.emailaddress.value;
        const password = form.password.value;

        try {
            const response = await axios.get(`https://furniflex-server-five.vercel.app/users/${email}`);

            if (response?.status === 200) {
                if (!(response?.data)) {
                    return toast.error('No User Found With This Email!')
                }

                signInUser(email, password)
                    .then((result) => {
                        toast.success("Signed In Successfully");

                        form.emailaddress.value = '';
                        form.password.value = '';
                        form.terms.checked = false;

                        return router.push('/products');
                    })
                    .catch((error) => {
                        toast.error(error?.message);
                    })
            }
        } catch (error) {
            console.log(error?.message);
        }

    }

    return (
        <section className="w-full bg-[#FFFFFF] flex justify-center items-center">
            <div className="w-[500px] h-[619px] bg-[#FAFAFA] border border-[#F5F5F5] rounded-[8px]">
                <div className="w-[452px] m-6">
                    <div className="py-[28.5px]">
                        <h1 className="text-[32px] font-medium leading-[38.4px]">
                            Welcome Back!
                        </h1>
                        <p className="pt-[2px] text-[#707070] text-[16px] font-medium leading-[19.2px]">
                            Enter your Credentials to access your account
                        </p>
                    </div>
                    <form onSubmit={handleSignIn} className="mt-[16.5px]">
                        <div className="space-y-[14px]">
                            <div className="w-full h-[52px] bg-[#FFFFFF] border border-[#DEDEDE] rounded-[5px] pl-[11px] pr-[11px]">
                                <label htmlFor="emailaddress" className="pt-[8px] text-[#707070] text-[12px] font-normal leading-[15.36px]">
                                    Email address
                                </label>
                                <input type="email" id="emailaddress" name="emailaddress" className="w-full mt-[2px] mb-[6px] text-[14px] font-normal leading-[21px] outline-none" required />
                            </div>
                            <div>
                                <div className="w-full h-[52px] bg-[#FFFFFF] border border-[#DEDEDE] rounded-[5px] pl-[11px] pr-[11px] relative">
                                    <label htmlFor="password" className="pt-[8px] text-[#707070] text-[12px] font-normal leading-[15.36px]">
                                        Password
                                    </label>
                                    <input type={isPassShown ? "text" : "password"} id="password" name="password" className="w-full mt-[2px] mb-[6px] text-[14px] font-normal leading-[21px] outline-none" required />
                                    <div onClick={() => setIsPassShown(!isPassShown)} className="absolute top-[17.23px] right-[12.25px] w-[21.48px] h-[18.95px] cursor-pointer">
                                        <Image fill={true} src={hideIconImage} alt="Hide Icon" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-[#1E99F5] text-[14px] font-medium leading-[16.8px] text-right cursor-pointer">
                            Forgot Password
                        </div>
                        <div className="mt-[14px] flex items-center">
                            <input type="checkbox" name="terms" id="terms" className="my-[3px] border border-[#000000]" required />
                            <label htmlFor="terms" className="pl-[5px] font-medium text-[14px] leading-[16.8px]">
                                I agree to the
                                <Link href="/terms" className="ml-1 underline">Terms & Policy</Link>
                            </label>
                        </div>
                        <div className="mt-5">
                            <input type="submit" value="Sign In" className="w-full h-[56px] bg-[#000000] text-white text-[17px] font-semibold leading-[17px] rounded-[6px] cursor-pointer" />
                        </div>
                    </form>
                    <SocialLogin />
                    <div className="mt-5 flex justify-center items-center gap-1.5 text-[14px] font-medium leading-[16.8px]">
                        <h4>Don't Have an account?</h4>
                        <Link href="/signup" className="text-[#0F3DDE]">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignInBox;