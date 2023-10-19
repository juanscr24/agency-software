'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <nav className='w-full fixed z-[100] bg-[#ecf0f3] shadow-xl h-20'>
            <div className='flex items-center sm:justify-center justify-between h-full w-full'>
                <Link href='/'>
                    <Image alt='' src='/logoBlack.png' width={70} height={70} priority className='max-sm:ml-4' />
                </Link>
                <div className='mr-6'>
                    <AiOutlineMenu onClick={handleMenu} className='sm:hidden text-2xl cursor-pointer' />

                </div>
            </div>
            <div className={
                menuOpen ? 'left-0 top-0 w-[65%] h-screen relative bg-[#ecf0f3] ease-in duration-500 flex flex-col justify-start z-50' : 'hidden'
            }>
                <div className='flex absolute right-6 top-6 w-full justify-end items-center'>
                    <AiOutlineClose onClick={handleMenu} className='text-2xl text-black mb-4'/>
                </div>
                <ul className='flex flex-col justify-center items-center mt-20'>
                    <li className='text-2xl text-black mb-4'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='text-2xl text-black mb-4'>
                        <Link href="/">Pricing</Link>
                    </li>
                    <li className='text-2xl text-black mb-4'>
                        <Link href="/">Contact</Link>
                    </li>
                    <li className='text-2xl text-black mb-4'>
                        <Link href="/">Portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar