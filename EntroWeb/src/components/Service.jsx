import React from 'react'

const Service = () => {
return (
<div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
    <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey   font-semibold mb-2'>Our Clients</h2>
        <p className='text-neuralDGrey'>We have been working with some Fortune 50+ clients</p>
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

        <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage Your Entire Community in a Single System
        </h2>
        <p className='textNeutralDGrey'>Entropix is a software company specializing in ERP solutions and website
            hosting, designed to streamline operations and enhance collaboration for businesses of all sizes.</p>

    </div>
</div>
);
};

export default Service
