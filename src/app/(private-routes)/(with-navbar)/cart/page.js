"use client";

import CartItem from '@/components/CartItem';
import { CartContext } from '@/providers/CartProvider';
import { useContext, useEffect, useState } from 'react';

import iImage from "@/assets/i.svg";
import Image from 'next/image';

const Cart = () => {
    const { cart, refetch } = useContext(CartContext);
    const [cartAmount, setCartAmount] = useState(0);

    useEffect(() => {
        if (cart?.cartItems) {
            setCartAmount(cart?.cartItems?.reduce((total, cartItem) => total + cartItem?.quantity * cartItem?.discountPrice, 0));
        }
    }, [cart]);

    return (
        <main className="mt-[19px] mb-[96px] max-w-[1200px] mx-auto flex justify-between">
            <section className="w-[740px] rounded-[12px]">
                <h2 className="pl-2 text-[#1E1E1E] text-[28px] font-semibold leading-[33.6px]">
                    An overview of your order
                </h2>
                <div className="mt-[40px] bg-[#FAFAFA]">
                    <div className="p-6">
                        {
                            cart?.cartItems?.map((cartItem, index) => {
                                // console.log(cart?.cartItems.length);
                                // console.log(index);
                                if (index + 1 < cart?.cartItems?.length) {
                                    // console.log("Hello");
                                    return (
                                        <>
                                            <CartItem key={index} userEmail={cart?.userEmail} cartItem={cartItem} refetch={refetch} />
                                            <div className="my-[24px] cart-divider w-full border border-[#ECECEC]"></div>
                                        </>
                                    )
                                }

                                return <CartItem key={index} userEmail={cart?.userEmail} cartItem={cartItem} refetch={refetch} />
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="w-[380px]">
                <h2 className="pt-2 pl-2 text-[#1E1E1E] text-[28px] font-semibold leading-[33.6px]">
                    Oder details
                </h2>
                <div className="mt-[40px] bg-[#FAFAFA] rounded-xl border border-[#DEDEDE]">
                    <div className="p-6">
                        <div className="space-y-[12px]">
                            <div className="flex">
                                <div className="flex-1 text-left text-[#656565] text-[20px] leading-[24px]">
                                    Subtotal
                                </div>
                                <div className="flex-1 text-right text-[#656565] text-[20px] font-medium leading-[24px]">
                                    € {cartAmount}.00
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1 text-left text-[#656565] text-[20px] leading-[24px]">
                                    Shipping
                                </div>
                                <div className="flex-1 text-right text-[#656565] text-[20px] font-medium leading-[24px]">
                                    Free
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1 text-left flex items-center gap-2 text-[#656565] text-[20px] leading-[24px]">
                                    <span>Estimated Tax</span>
                                    <div className="relative w-[13.33px] h-[13.33px]">
                                        <Image fill={true} src={iImage} alt="Tax Icon" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-right text-[#656565] text-[20px] font-medium leading-[24px]">
                                    € -
                                </div>
                            </div>
                        </div>
                        <div className="my-5 border border-[#ECECEC]"></div>
                        <div className="flex">
                            <div className="flex-1 text-left text-[#656565] text-[24px] font-semibold leading-[28.8px]">
                                Subtotal
                            </div>
                            <div className="flex-1 text-right text-[#0E0E0E] text-[24px] font-semibold leading-[28.8px]">
                                € {cartAmount}.00
                            </div>
                        </div>
                    </div>
                </div>
                <button className="mt-6 py-[19.5px] px-[124.5px] bg-[#000000] text-[#FFFFFF] text-[17px] font-medium leading-[17px] rounded-[5px] uppercase">
                    Go to Checkout
                </button>
            </section>
        </main>
    )
}

export default Cart;