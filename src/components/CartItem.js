import Image from 'next/image';

import minusIconImage from '@/assets/minus.svg';
import plusIconImage from '@/assets/plus.svg';
import crossImage from "@/assets/cross.svg";
import axios from 'axios';
import { toast } from 'react-toastify';

const CartItem = ({ userEmail, cartItem, refetch }) => {

    const handleQuantityChange = async (actionType, cartItemInfo) => {
        if (actionType === 'All') {
            try {
                const response = await axios.patch(`https://furniflex-server-five.vercel.app/carts/${userEmail}`, { actionType, productId: cartItemInfo?.productId });

                if (response.status === 200) {
                    refetch();
                    toast.success("Item Removed From The Cart!", {
                        position: "top-center"
                    });
                }
            } catch (error) {
                console.log(error?.message);
            }
        }
        else {
            if(actionType === 'Minus' && cartItemInfo?.quantity === 1) {
                return;
            }
            try {
                const response = await axios.patch(`https://furniflex-server-five.vercel.app/carts/${userEmail}`, { actionType, productId: cartItemInfo.productId });

                if (response.status === 200) {
                    refetch();
                    toast.success("Cart Updated!", {
                        position: "top-center"
                    });
                }
            } catch (error) {
                console.log(error?.message);
            }
        }
    };

    return (
        <div className="relative w-full">
            <div className="flex items-center gap-[12px]">
                <div className="w-[72px] h-[44px] flex justify-center items-center gap-2 rounded-md border border-[#DEDEDE]">
                    <div onClick={() => handleQuantityChange("Minus", cartItem)} className="relative w-[16px] h-[16px] cursor-pointer">
                        <Image fill={true} src={minusIconImage} alt="Minus" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-[#0E0E0E] text-[20px] font-semibold leading-[24px]">
                        {cartItem?.quantity}
                    </div>
                    <div onClick={() => handleQuantityChange("Plus", cartItem)} className="relative w-[16px] h-[16px] cursor-pointer">
                        <Image fill={true} src={plusIconImage} alt="Plus" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="flex justify-start items-start gap-[16px]">
                    <div className="relative w-[88px] h-[88px] bg-[#EAEAEA] rounded-lg border border-[#DEDEDE]">
                        <Image fill={true} src={cartItem?.image} alt="Cart Image" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="pt-[8px] text-[#434343] text-[16px] font-bold leading-[19.2px]">
                        {cartItem?.productName}
                    </h4>
                </div>
            </div>
            <div className="pt-2 text-[#0E0E0E] text-[20px] font-semibold leading-[24px] text-right">
                €{cartItem?.discountPrice}.00
            </div>
            <div onClick={() => handleQuantityChange("All", cartItem)} className="absolute top-0 right-0 w-[24px] h-[24px] cursor-pointer">
                <Image fill={true} src={crossImage} alt="Cross" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default CartItem;