"use client";

import Image from "next/image";

import hideIconImage from "@/assets/hide-icon.svg";
import Link from "next/link";
import SocialLogin from "../Shared/SocialLogin";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

const SignUpBox = () => {
    const [isPassShown, setIsPassShown] = useState(false);

    const { signUpUser, updateUser, signOutUser } = useContext(AuthContext);

    const router = useRouter();

    const handleSignUpUser = async (e) => {
        e.preventDefault();

        const form = e.target;

        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const email = form.emailaddress.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error('Password Must Be At Least 6 Characters Long. Try Again!');
            return;
        }

        signUpUser(email, password)
            .then(result => {
                const name = firstName + lastName;
                const imgURL = ''

                updateUser(name, imgURL)
                    .then(() => {
                        signOutUser()
                            .then(async () => {
                                let userInfo;

                                if (firstName && lastName) {
                                    userInfo = {
                                        firstName,
                                        lastName,
                                        email,
                                        password
                                    }
                                }

                                else if (firstName) {
                                    userInfo = {
                                        firstName,
                                        email,
                                        password
                                    };
                                }

                                else if (lastName) {
                                    userInfo = {
                                        lastName,
                                        email,
                                        password
                                    }
                                }

                                else {
                                    userInfo = {
                                        email,
                                        password
                                    }
                                }

                                try {
                                    const response = await axios.post('https://furniflex-server-five.vercel.app/users', {
                                        ...userInfo,
                                        loginType: "EmailAndPass"
                                    });

                                    if (response?.status === 201) {
                                        toast.success('Account created successfully!');
                                    }
                                } catch (error) {
                                    if (error?.status === 409) {
                                        toast.error("Email Already Exist!");
                                    }
                                    else {
                                        toast.error(error?.message);
                                    }
                                }

                                form.firstname.value = '';
                                form.lastname.value = '';
                                form.emailaddress.value = '';
                                form.password.value = '';
                                form.terms.checked = false;

                                return router.push('/signin');
                            })
                            .catch(error => console.log(error));
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => toast.error(error?.message));
    };

    return (
        <section className="w-full bg-[#FFFFFF] flex justify-center items-center">
            <div className="w-[500px] h-[619px] bg-[#FAFAFA] border border-[#F5F5F5] rounded-[8px]">
                <div className="w-[452px] m-6">
                    <h4 className="mt-[2.5px] text-black text-2xl text-center font-semibold leading-[28.8px]">
                        Welcome To
                    </h4>
                    <h1 className="mt-[6px] text-[40px] text-center font-bold leading-[48px]">
                        Furni
                        <span className="text-[#1E99F5]">Flex</span>
                    </h1>
                    <p className="mt-[2px] text-[#707070] text-center text-base font-medium leading-[19.2px]">
                        Signup for purchase your desire products
                    </p>

                    <form onSubmit={handleSignUpUser} className="mt-[16.5px] space-y-[14px]">
                        <div className="flex justify-center gap-[14px]">
                            <div className="w-full h-[52px] bg-[#FFFFFF] border border-[#DEDEDE] rounded-[5px] pl-[11px] pr-[11px]">
                                <label htmlFor="firstname" className="pt-[8px] text-[#707070] text-[12px] font-normal leading-[15.36px]">
                                    First name (optional)
                                </label>
                                <input type="text" id="firstname" name="firstname" className="w-full mt-[2px] mb-[6px] text-[14px] font-normal leading-[21px] outline-none" />
                            </div>
                            <div className="w-full h-[52px] bg-[#FFFFFF] border border-[#DEDEDE] rounded-[5px] pl-[11px] pr-[11px]">
                                <label htmlFor="lastname" className="pt-[8px] text-[#707070] text-[12px] font-normal leading-[15.36px]">
                                    Last name (optional)
                                </label>
                                <input type="text" id="lastname" name="lastname" className="w-full mt-[2px] mb-[6px] text-[14px] font-normal leading-[21px] outline-none" />
                            </div>
                        </div>
                        <div>
                            <div className="w-full h-[52px] bg-[#FFFFFF] border border-[#DEDEDE] rounded-[5px] pl-[11px] pr-[11px]">
                                <label htmlFor="emailaddress" className="pt-[8px] text-[#707070] text-[12px] font-normal leading-[15.36px]">
                                    Email address
                                </label>
                                <input type="email" id="emailaddress" name="emailaddress" className="w-full mt-[2px] mb-[6px] text-[14px] font-normal leading-[21px] outline-none" required />
                            </div>
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
                        <div>
                            <div className="flex items-center">
                                <input type="checkbox" name="terms" id="terms" className="my-[3px] border border-[#000000]" required />
                                <label htmlFor="terms" className="pl-[5px] font-medium text-[14px] leading-[16.8px]">
                                    I agree to the
                                    <Link href="/terms" className="ml-1 underline">Terms & Policy</Link>
                                </label>
                            </div>
                        </div>
                        <div className="mt-[6px]">
                            <input type="submit" value="Signup" className="w-full h-[56px] bg-[#000000] text-white text-[17px] font-semibold leading-[17px] rounded-[6px] cursor-pointer" />
                        </div>
                    </form>
                    <SocialLogin />
                    <div className="mt-5 flex justify-center items-center gap-1.5 text-[14px] font-medium leading-[16.8px]">
                        <h4>Have an account?</h4>
                        <Link href="/signin" className="text-[#0F3DDE]">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpBox;