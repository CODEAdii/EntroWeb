import React from 'react';
import { Carousel } from 'flowbite-react';
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          
          {/* First Carousel Item */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="Innovative software solutions" />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-[#F2AA3D] md:w-3/4 leading-snug'>
                Entropix... <br />
                <span className='text-neutralDGrey leading-snug text-4xl'>
                  Empowering Your Digital Transformation
                </span>
              </h1>
              <p className='text-neutralGrey text-base mb-8'>
                We provide innovative software solutions, helping businesses scale with powerful ERP systems, mobile apps, and much more.
                Let us turn your ideas into impactful realities.
              </p>
              <button className="btn-primary">
                Get Started
              </button>
            </div>
          </div>

          {/* Second Carousel Item */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="Custom Software Development" />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-[#F2AA3D] md:w-3/4 leading-snug'>
                Tailored Software Solutions <br />
                <span className='text-neutralDGrey leading-snug text-4xl'>
                  For Your Business Success
                </span>
              </h1>
              <p className='text-neutralGrey text-base mb-8'>
                From ERP systems to mobile applications, our software solutions are designed to streamline your operations and enhance your digital presence.
              </p>
              <button className="btn-primary">
                Contact Us
              </button>
            </div>
          </div>

          {/* Third Carousel Item */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="Cloud Hosting and IT Services" />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-[#F2AA3D] md:w-3/4 leading-snug'>
                Scalable Cloud Hosting & IT Services <br />
                <span className='text-neutralDGrey leading-snug text-4xl'>
                  For a Secure, Efficient Future
                </span>
              </h1>
              <p className='text-neutralGrey text-base mb-8'>
                With our secure and reliable cloud hosting and IT consulting services, we ensure that your business is always ready for tomorrow.
              </p>
              <button className="btn-primary">
                Explore Our Services
              </button>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
}

export default Home;
