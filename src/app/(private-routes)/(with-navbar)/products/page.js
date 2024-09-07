"use client";

import Product from "@/components/Product"

import leftArrowImage from "@/assets/left-arrow.svg";
import rightArrowImage from "@/assets/right-arrow.svg";
import Image from "next/image";
import { useContext, useState } from "react";
import { ProductsContext } from "@/providers/ProductsProvider";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const [isRocking, setIsRocking] = useState(true);
  const [isSide, setIsSide] = useState(false);
  const [isLounge, setIsLounge] = useState(false);

  return (
    <section className="mt-[80px] mb-[96px] max-w-[1199px] mx-auto flex justify-between">
      <aside className="w-[263px] h-[1000px] flex flex-col items-start border-r border-[#E8E8E8]">
        <button onClick={() => { setIsRocking(true); setIsSide(false); setIsLounge(false); }} className={`${isRocking && 'bg-[#0E0E0E] text-[#FFFFFF] font-semibold rounded-lg'} w-[231px] h-[53px] flex pl-[24px] pt-[12px] text-[#717171] text-[22px] font-medium leading-[26.4px] hover:bg-[#0E0E0E] hover:text-[#FFFFFF] hover:font-semibold hover:rounded-lg`}>
          Rocking Chair
        </button>
        <div className="my-[12px] w-[231px] border border-[#F4F4F4]"></div>
        <button onClick={() => { setIsRocking(false); setIsSide(true); setIsLounge(false); }} className={`${isSide && 'bg-[#0E0E0E] text-[#FFFFFF] font-semibold rounded-lg'} w-[231px] h-[53px] flex pl-[24px] pt-[12px] text-[#717171] text-[22px] font-medium leading-[26.4px] hover:bg-[#0E0E0E] hover:text-[#FFFFFF] hover:font-semibold hover:rounded-lg`}>
          Side Chair
        </button>
        <div className="my-[12px] w-[231px] border border-[#F4F4F4]"></div>
        <button onClick={() => { setIsRocking(false); setIsSide(false); setIsLounge(true); }} className={`${isLounge && 'bg-[#0E0E0E] text-[#FFFFFF] font-semibold rounded-lg'} w-[231px] h-[53px] flex pl-[24px] pt-[12px] text-[#717171] text-[22px] font-medium leading-[26.4px] hover:bg-[#0E0E0E] hover:text-[#FFFFFF] hover:font-semibold hover:rounded-lg`}>
          Lounge Chair
        </button>
      </aside>
      <section className="w-[894px]">
        <div className="flex justify-start items-start gap-x-7 gap-y-16 flex-wrap">
          {
            products?.map((product) => {
              return <Product key={product?._id} product={product} />
            })
          }
        </div>
        <div className="mt-16 flex justify-center items-center gap-2">
          <button disabled={true} className="w-[32px] h-[32px] flex justify-center items-center bg-[#DADADA] text-[#0E0E0E] text-[14px] font-bold leading-[20px] text-center rounded border border-[#DFE3E8] opacity-50">
            <div className="relative w-[12px] h-[7.41px]">
              <Image fill={true} src={leftArrowImage} alt="Right Arrow Icon" className="w-full h-full object-cover" />
            </div>
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center text-[#0E0E0E] text-[14px] font-bold leading-[20px] text-center rounded border border-[#0E0E0E]">
            1
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center text-[#0E0E0E] text-[14px] font-bold leading-[20px] text-center rounded border border-[#DFE3E8]">
            2
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center text-[#0E0E0E] text-[14px] font-bold leading-[20px] text-center rounded border border-[#DFE3E8]">
            ...
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center text-[#0E0E0E] text-[14px] font-bold leading-[20px] text-center rounded border border-[#DFE3E8]">
            9
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center text-[#0E0E0E] text-[14px] font-bold leading-[20px] text-center rounded border border-[#DFE3E8]">
            10
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center text-[#0E0E0E] text-[14px] font-bold leading-[20px] text-center rounded border border-[#DFE3E8]">
            <div className="relative w-[12px] h-[7.41px]">
              <Image fill={true} src={rightArrowImage} alt="Right Arrow Icon" className="w-full h-full object-cover" />
            </div>
          </button>
        </div>
      </section>
    </section>
  )
}

export default Products