'use client'
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselComponent = () => {
    return (
        <div className='sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto mt-20 text-center'>
            <h1 className='font-bold text-2xl mb-8'>Some of our Work</h1>
            <Carousel>
                <div>
                    <Image src='/wolf.jpg' alt='' width={500} height={500}/>
                </div>
                <div>
                    <Image src='/wolf.jpg' alt='' width={500} height={500} />
                </div>
            </Carousel>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium eius error deleniti blanditiis assumenda ipsam voluptatem hic ex, quas reiciendis a sed doloremque repellendus. Architecto animi corrupti magni doloribus?</h1>
        </div>
    )
}

export default CarouselComponent