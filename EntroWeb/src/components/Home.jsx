import React from 'react'
import { Carousel } from 'flowbite-react';
import banner1 from "../assets/banner1.png"

const Home=()=> {
return (
<div className='bg-neutralSilver'>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div>
                    <img src={banner1} alt="" srcset="" />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-[#F2AA3D] md:w-3/4 leading-snug'> Entropix... <br /><span
                            className='text-neutralDGrey leading-snug text-4xl'> Empowering Your Digital Presence</span>
                    </h1>
                    <p className='text-neutralGrey text-base mb-8'>Innovative solutions crafted for the digital age,
                        transforming ideas into impactful realities.</p>
                    <button className="btn-primary">
                        Register
                    </button>
                </div>
            </div>
             <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div>
                    <img src={banner1} alt="" srcset="" />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-[#F2AA3D] md:w-3/4 leading-snug'> Entropix... <br /><span
                            className='text-neutralDGrey leading-snug text-4xl'> Empowering Your Digital Presence</span>
                    </h1>
                    <p className='text-neutralGrey text-base mb-8'>Innovative solutions crafted for the digital age,
                        transforming ideas into impactful realities.</p>
                    <button className="btn-primary">
                        Register
                    </button>
                </div>
            </div>
             <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div>
                    <img src={banner1} alt="" srcset="" />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-[#F2AA3D] md:w-3/4 leading-snug'> Entropix... <br /><span
                            className='text-neutralDGrey leading-snug text-4xl'> Empowering Your Digital Presence</span>
                    </h1>
                    <p className='text-neutralGrey text-base mb-8'>Innovative solutions crafted for the digital age,
                        transforming ideas into impactful realities.</p>
                    <button className="btn-primary">
                        Register
                    </button>
                </div>
            </div>
        </Carousel>

    </div>
</div>
)
}
export default Home;
