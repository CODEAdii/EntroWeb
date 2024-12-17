import React from 'react'

const Service = () => {
return (
<div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id="service">
    <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey   font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralDGrey'>We collaborate with industry-leading clients to deliver exceptional results.</p>
        {/* Comapny logos */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8 '>
            <img src="/src/assets/companyIcons/Logo1.png" alt="" />
            <img src="/src/assets/companyIcons/Logo2.png" alt="" />
            <img src="/src/assets/companyIcons/Logo3.png" alt="" />
            <img src="/src/assets/companyIcons/Logo4.png" alt="" />
            <img src="/src/assets/companyIcons/Logo5.png" alt="" />
            <img src="/src/assets/companyIcons/Logo6.png" alt="" />
        </div>
    </div>
    {/* Service Cards */}
    <div className=' mt-20 md:w-1/2 mx-auto text-center'>

        <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'> Comprehensive IT Solutions for Your Business

        </h2>
        <p className='textNeutralDGrey'> At Entropix, we specialize in creating tailor-made ERP systems, mobile apps,
            and offering reliable cloud hosting solutions. Our mission is to streamline your operations and empower your
            digital transformation.
            .</p>

    </div>
    <div className='flex flex-wrap justify-center gap-10 mt-16'>

        {/* ERP Development Service */}
        <div
            className='flex flex-col items-center text-center bg-white  p-8 rounded-md w-80 shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-[#D88A2D] transition-all duration-300'>
            <p className='text-2xl font-semibold text-neutralDGrey mb-4'> <img src="/src/assets/companyIcons/erp.png"
                    alt="" className="w-12 h-12" /></p>
            <h3 className='text-2xl font-semibold text-neutralDGrey mb-4'>Custom ERP Solutions</h3>
            <p className='text-neutralGrey mb-6'>
                Streamline your business operations with a custom ERP system that integrates all your processes into one
                unified platform.
            </p>
            <button className='btn-primary'>Learn More</button>
        </div>

        {/* App and Web Development Service */}
        <div
            className='flex flex-col items-center text-center bg-white  p-8 rounded-md w-80 shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-[#D88A2D] transition-all duration-300'>
            <p className='text-2xl font-semibold text-neutralDGrey mb-4'>
                <img src="/src/assets/companyIcons/appDevelopment.png" alt="App and Web Development"
                    className="w-12 h-12" />
            </p>

            <h3 className='text-2xl font-semibold text-neutralDGrey mb-4'>App & Web Development</h3>
            <p className='text-neutralGrey mb-6'>
                Create seamless, intuitive applications for both mobile (iOS & Android) and web platforms. We build
                solutions that meet the specific needs of your business, ensuring an excellent user experience across
                all devices.
            </p>
            <button className='btn-primary'>Explore Services</button>
        </div>


        {/* Cloud Hosting & IT Services */}
        <div
            className='flex flex-col items-center text-center bg-white  p-8 rounded-md w-80 shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-[#D88A2D] transition-all duration-300'>
            <p className='text-2xl font-semibold text-neutralDGrey mb-4'> <img
                    src="/src/assets/companyIcons/cloudData.png" alt="" className="w-12 h-12" /></p>

            <h3 className='text-2xl font-semibold text-neutralDGrey mb-4'>Cloud Hosting & IT Services</h3>
            <p className='text-neutralGrey mb-6'>
                Secure and scalable cloud hosting solutions to ensure your business stays connected and operates
                smoothly 24/7.
            </p>
            <button className='btn-primary'>Get Started</button>
        </div>

    </div>
</div>
);
};

export default Service
