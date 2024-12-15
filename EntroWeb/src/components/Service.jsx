import React from 'react'

const Service = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey   font-semibold mb-2'>Our Clients</h2>
            <p className='text-neuralDGrey'>We have been working with some Fortune 50+ clients</p>
            {/* Comapny logos */}
            <div className='my-12 flex flex-wrap justify-between items-center gap-8 '>
                <img src="/src/assets/companyIcons/Logo1.png" alt=""  />
                <img src="/src/assets/companyIcons/Logo2.png" alt=""  />
                <img src="/src/assets/companyIcons/Logo3.png" alt=""  />
                <img src="/src/assets/companyIcons/Logo4.png" alt=""  />
                <img src="/src/assets/companyIcons/Logo5.png" alt=""  />
                <img src="/src/assets/companyIcons/Logo6.png" alt=""  />


            </div>

        </div>
    </div>
  )
}

export default Service