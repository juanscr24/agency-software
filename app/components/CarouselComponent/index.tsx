'use client'
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const works = ['/Interior 9.png', '/9.png', '/4..png']

const CarouselComponent = () => {
    return (
        <div className='sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto mt-20 text-center'>
            <h1 className='font-bold text-2xl mb-8'>Some of our Work</h1>
            <Carousel>
                {works.map((option) => <Image src={option} alt='' width={500} height={100} className='object-cover' />)}
            </Carousel>
            <h1 className='text-center'>"J S.A.S is an architectural firm committed to the creation of exceptional spaces that blend innovative design with functionality. We offer a wide range of services, from renders and project visualization to interior design and complete construction."




</h1>
        </div>
    )
}

export default CarouselComponent