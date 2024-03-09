import React from 'react'
import Logo from '/public/Logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { FiShoppingCart } from "react-icons/fi";
import { Input } from "@/components/ui/input"
import { IoIosSearch } from "react-icons/io";


const Header = () => {
    return (
        <div className='flex justify-between items-center px-20 py-6 '>
            <Image src={Logo} alt="Logo" className='w-40' />

            <ul className='flex gap-x-12 '> 
                <li className=' text-xl'><Link href={"/"}>Boys</Link></li>
                <li className=' text-xl'><Link href={"/"}>Girls</Link></li>
                <li className=' text-xl'><Link href={"/"}>Kids</Link></li>
                <li className=' text-xl'><Link href={"/"}>All Products</Link></li>
            </ul>
            
            <div className='w-50 flex relative'>
                <Input />
                    <IoIosSearch size={30} className=' absolute right-0 mr-2' />
                
            </div>
            <div className=' h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center'>
                <FiShoppingCart size={22} />
            </div>
        </div>
    )
}

export default Header