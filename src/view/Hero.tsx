import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { HiShoppingCart } from "react-icons/hi2";
import hero from '/public/hero.webp'
import Featured1 from '/public/Featured1.webp'
import Featured2 from '/public/Featured2.webp'
import Featured3 from '/public/Featured3.webp'
import Featured4 from '/public/Featured4.webp'
export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row gap-y-10 justify-center items-center ">
            {/* left side */}
            <div className=" flex-1">
                <Badge className=" py-2 px-4 bg-blue-100 text-center text-lg text-blue-800 "> Sale 70%</Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mt-16">
                    An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 text-2xl mt-16 font-bold[&:not(:first-child)]">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <div className=" relative mt-6">
                    <Button className="py-6 px-20 rounded-none text-xl"> Start Shopping </Button>
                    <HiShoppingCart size={30} className=" absolute text-white flex top-2 ml-11" />
                </div>
                <div className="flex mt-20  justify-between">
                <Image src={Featured1} alt="Hero" ></Image>
                <Image src={Featured2} alt="Hero" ></Image>
                <Image src={Featured3} alt="Hero" ></Image>
                <Image src={Featured4} alt="Hero" ></Image>
                </div>
            </div>
            {/* right side  */}
            <div className="flex-1 relative flex justify-center items-center">
                {/* Circular background */}
                <div className="absolute">
                    <div className="w-[500px] h-[500px] bg-orange-100 rounded-full"></div>
                </div>
                {/* Hero image */}
                <div className="relative z-10">
                    <Image src={hero} alt="Hero" ></Image>
                </div>
            </div>

        </section>
    );
}


