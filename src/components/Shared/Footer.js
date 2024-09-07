import { inter } from "@/app/fonts/inter";
import navIconImage from "@/assets/nav-icon.svg";

import fbIconImage from "@/assets/facebook-02.svg";
import instaIconImage from "@/assets/instagram.svg";
import xIconImage from "@/assets/new-twitter.svg";
import linkedInIconImage from "@/assets/linkedin-02.svg";
import usaIconImage from "@/assets/usa.png";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0E0E0E]">
            <div className="max-w-[1200px] mx-auto">
                <div className="pt-[80px] flex justify-between items-start gap-[339px]">
                    <div className="flex justify-center items-center gap-[6px]">
                        <div className="relative w-[38px] h-[38px]">
                            <Image fill={true} src={navIconImage} alt="Footer Icon" className="w-full h-full object-cover" />
                        </div>
                        <h2 className={`${inter.className} text-white text-[20px] font-bold leading-[24.2px] `}>
                            Furni
                            <span className="text-[#1E99F5]">Flex</span>
                        </h2>
                    </div>
                    <div className="flex justify-between items-start gap-[120px]">
                        <div>
                            <h2 className="text-[#FFFFFF] font-semibold text-[18px] leading-[21.6px]">
                                About US
                            </h2>
                            <ul className="mt-[28px] space-y-[12px]">
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Master Plan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Invest
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Pressroom
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[#FFFFFF] font-semibold text-[18px] leading-[21.6px]">
                                Explore EEVE
                            </h2>
                            <ul className="mt-[28px] space-y-[12px]">
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Unlock my Robot Power
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Starlight
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Robot Platform
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        EEVE Roadmap
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[#FFFFFF] font-semibold text-[18px] leading-[21.6px]">
                                Community & Support
                            </h2>
                            <ul className="mt-[28px] space-y-[12px]">
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Willow X Community
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Developer & Maker Access
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                        Special Cases
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-[108px] pb-8 border-t border-[#252948]">
                    <div className="pt-10 flex justify-between items-end gap-[198.36px]">
                        <div className="flex items-center gap-[11.43px]">
                            <Link href="/">
                                <div className="relative w-[20px] h-[20px]">
                                    <Image fill={true} src={fbIconImage} alt="Facebook Icon" className="w-full h-full object-cover" />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="relative w-[20px] h-[20px]">
                                    <Image fill={true} src={instaIconImage} alt="Instagram Icon" className="w-full h-full object-cover" />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="relative w-[20px] h-[20px]">
                                    <Image fill={true} src={xIconImage} alt="X Icon" className="w-full h-full object-cover" />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="relative w-[20px] h-[20px]">
                                    <Image fill={true} src={linkedInIconImage} alt="LinkedIn Icon" className="w-full h-full object-cover" />
                                </div>
                            </Link>

                        </div>
                        <ul className="flex items-center gap-[24px]">
                            <li>
                                <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                    March22 Recap
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                    General Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center gap-[8px]">
                            <div className="relative w-[18px] h-[18px]">
                                <Image fill={true} src={usaIconImage} alt="USA Icon" className="w-full h-full object-cover" />
                            </div>
                            <h4 href="/" className="text-[#81859F] text-[18px] font-semibold leading-[21.6px]">
                                United States (English)
                            </h4>
                        </div>
                    </div>
                    <h4 className="pt-11 text-center text-[#323544] text-[18px] font-semibold leading-[21.6px] ">
                        EEVE © 2024. All rights reserved.
                    </h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;