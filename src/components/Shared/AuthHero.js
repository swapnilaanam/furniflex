import Image from "next/image";

import iconImage from "@/assets/icon.svg";
import {inter} from "@/app/fonts/inter";

const AuthHero = () => {
    return (
        <section className="min-w-[688px] h-[1024px] bg-hero-image object-cover">
            <div className="w-[445px] text-red-400 mt-[433px] ml-[138px] flex flex-col items-center">
                <div className="relative w-[89px] h-[85px] mb-[6px]">
                    <Image fill={true} src={iconImage} className="w-full h-full object-cover" />
                </div>
                <h2 className={`${inter.className} text-white text-[40px] font-bold leading-[48.41px]`}>
                    Furni
                    <span className="text-[#1E99F5]">Flex</span>
                </h2>
                <p className="mt-1 text-center text-[#C8C4C4] text-base leading-[19.2px]">
                    Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                </p>
            </div>
        </section>
    )
}

export default AuthHero;