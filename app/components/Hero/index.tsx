'use client'
import Image from "next/image"
import Link from "next/link";
import Typed from 'react-typed';
import CarouselComponent from "../CarouselComponent";

const Hero = () => {
    return (
        <div className="w-full bg-[#ecf0f3] relative">
            <Image alt="" src='/blur.png' layout="fill" objectFit="cover" quality={100} priority className="absolute animate-pulse" />
            <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-48">
                <h1 className="text-5xl sm:text-8xl font-bold tracking-tight z-20">
                    A software {''}
                    <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">
                        agency
                    </span>
                </h1>
                <h1 className="text-5xl sm:text-8xl font-bold z-20">With a twist</h1>
                <h2 className="text-2xl sm:text-4xl mt-4">specializing in {''}
                    <Typed
                        strings={[
                            'web development',
                            'mobile development',
                            'UI, UX Design',
                            'branding'
                        ]}
                        typeSpeed={200}
                        backSpeed={100}
                        loop
                    />{''}
                </h2>
                <div className="items-center mx-auto justify-center text-center pt-16 z-20">
                    <Link href='/pricing'>
                        <button className="bg-black text-white text-2xl px-10 py-5 rounded-lg shadow-xl shadow-black/40 hover:bg-black/70 cursor-pointer">
                            See plans
                        </button>
                    </Link>
                    <p className="pt-6 font-bold text-lg">
                        Subscription based model with no hidden fees. Unlimited requests
                    </p>
                </div>
            </div>
            <div>
                <CarouselComponent />
            </div>
        </div>
    )
}

export default Hero