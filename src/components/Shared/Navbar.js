"use client";

import Image from "next/image";
import navIconImage from "@/assets/nav-icon.svg";
import cartIconImage from "@/assets/bucket-icon.svg";
import profileIconImage from "@/assets/profile-icon.svg";

import { inter } from "@/app/fonts/inter";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/providers/CartProvider";
import { AuthContext } from "@/providers/AuthProvider";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);
    const [isShown, setIsShown] = useState(false);

    const { cart } = useContext(CartContext);
    const {signOutUser} = useContext(AuthContext);

    useEffect(() => {
        if (cart?.cartItems) {
            setCartCount(cart?.cartItems?.reduce((total, cartItem) => total + cartItem?.quantity, 0));
        }
    }, [cart]);

    return (
        <nav className="w-full h-[118px] bg-[#FFFFFF] border-b border-[#F1F1F1]">
            <div className="max-w-[1200px] h-full mx-auto flex justify-between items-center">
                <div className="flex justify-center items-center gap-1.5">
                    <div className="relative w-[38px] h-[38px]">
                        <Image fill={true} src={navIconImage} alt="Nav Icon" className="w-full h-full object-cover" />
                    </div>
                    <h1 className={`${inter.className} text-[20px] font-bold leading-[24px]`}>
                        Furni
                        <span className="text-[#1E99F5]">
                            Flex
                        </span>
                    </h1>
                </div>
                <ul className="flex justify-center items-center gap-2">
                    <li>
                        <Link href="/" className="py-2 px-5 text-[18px] font-medium leading-[21.6px] hover:bg-[#F8F8F8] rounded-md">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="py-2 px-5 text-[18px] font-medium leading-[21.6px] hover:bg-[#F8F8F8] rounded-md">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="py-2 px-5 text-[18px] font-medium leading-[21.6px] hover:bg-[#F8F8F8] rounded-md">
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="py-2 px-5 text-[18px] font-medium leading-[21.6px] hover:bg-[#F8F8F8] rounded-md">
                            Custom
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="py-2 px-5 text-[18px] font-medium leading-[21.6px] hover:bg-[#F8F8F8] rounded-md">
                            Blog
                        </Link>
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-6">
                    <Link href="/cart">
                        <div className="relative w-[33px] h-[34px]">
                            <Image fill={true} src={cartIconImage} alt="Cart Icon" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 right-0 z-10 w-4 h-4 bg-[#323232] rounded-full flex justify-center items-center text-[#FFFFFF] text-[11.2px] font-medium leading-[13.44px]">
                                {cartCount}
                            </div>
                        </div>
                    </Link>
                    <div onClick={() => setIsShown(!isShown)} className="relative w-[40px] h-[40px]">
                        <Image fill={true} src={profileIconImage} alt="Profile Icon" className="w-full h-full object-cover" />
                        {
                            isShown && (
                                <div className="absolute top-12 -right-10 z-50">
                                    <button onClick={() => signOutUser()} className="bg-red-600 text-white text-sm font-medium w-fit px-12 py-2 text-nowrap rounded-md">
                                        Sign Out
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;