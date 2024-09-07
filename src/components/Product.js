"use client";

import Image from "next/image";
import cartImage from "@/assets/cart-white.svg";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { toast } from "react-toastify";
import { CartContext } from "@/providers/CartProvider";

const Product = ({ product }) => {
    const {user} = useContext(AuthContext);
    const {refetch} = useContext(CartContext);

    const handleAddToCart = async(productInfo) => {
        // console.log(productInfo);

        const cartInfo = {
            productId: productInfo?._id,
            productName: productInfo?.productName,
            image: productInfo?.image,
            discountPrice: productInfo?.discountPrice
        } 

        try {
            const response = await axios.post(`https://furniflex-server-five.vercel.app/carts/${user?.email}`, cartInfo);

            if(response?.status === 200) {
                refetch();
                toast.success('Added To The Cart!', {
                    position: 'top-center'
                });
            }
        } catch (error) {
            console.log(error?.message);
        }
    }; 

    return (
        <div className="p-4 border border-[#F1F1F1] rounded-2xl">
            <div className="pt-[16.01px] pr-[19.5px] pb-[14.99px] pl-[20.5px] bg-[#F2F2F2] rounded-lg">
                <div className="relative w-[205px] h-[205px]">
                    <Image fill={true} src={product?.image} alt="Chair" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="mt-8 w-[245px]">
                <h4 className="ml-2 text-[#343434] text-[18px] font-semibold leading-[21.6px]">
                    {product?.productName}
                </h4>
                <div className="ml-2 mt-4 flex justify-start items-center">
                    <h2 className="text-[#343434] text-[18px] font-semibold leading-[21.6px]">
                        €{product?.discountPrice}.00
                    </h2>
                    <h4 className="ml-2 text-[#ABABAB] text-[18px] font-medium leading-[21.6px]">
                        €{product?.price}.00
                    </h4>
                    <h2 className="ml-3 text-[#B92E2E] text-[18px] font-semibold leading-[21.6px]">
                        {product?.discount}
                    </h2>
                </div>
                <p className="ml-2 mt-4 w-full break-words text-[#838383] text-[14px] font-normal leading-[16.8px]">
                    {product?.productDesc}
                </p>
            </div>
            <div className="mt-8">
                <button onClick={() => handleAddToCart(product)} className="px-[68.28px] py-[11.5px] bg-[#202020] flex justify-center items-center gap-[12px] rounded-[5px]">
                    <div className="relative w-[17.44px] h-[18px]">
                        <Image fill={true} src={cartImage} alt="Cart Icon" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[#FFFFFF] text-[16px] font-semibold leading-[19.2px]">
                        Add to cart
                    </span>
                </button>
            </div>
        </div>
    )
};

export default Product;