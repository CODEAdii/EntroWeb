import React from 'react'
import about from "../assets/aboutUs.png";
import { FaUsers, FaProjectDiagram, FaStar, FaClock, FaDollarSign } from 'react-icons/fa';


const About = () => {
return (
<div>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="about">
        <div className=' md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={about} alt="" srcset="" />
            </div>
            <div className='md:2-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.</h2>
                <p className='md:3/4 text-sm text-neutralDGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Optio, eligendi animi. In, suscipit iusto. Nesciunt sed asperiores animi. Sed aliquid
                    aspernatur quisquam quas eveniet. Ullam sit illo error alias fugit?</p>
                <button className='btn-primary'>Learn More</button>

            </div>
        </div>
    </div>
   {/* Company Stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-[#F2AA3D] py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-white font-semibold mb-4 md:w-2/3'>
                            Empowering Local Businesses to Thrive
                            <br />
                            <span className='text-neutralGrey'> Through Innovative Technology</span>
                        </h2>
                        <p className='md:w-3/4 text-sm text-white mb-8'>
                            We are dedicated to helping local businesses reinvent themselves in the digital age. Our tailored solutions are designed to meet your unique needs, ensuring you stay competitive and efficient in a rapidly changing market.
                        </p>
                    </div>
                    {/* Stats Section */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                                <FaUsers className='text-[#F2AA3D] text-3xl mr-4' />
                                <div>
                                    <h4 className='text-xl font-semibold'>100+</h4>
                                    <p className='text-sm text-neutralGrey'>Satisfied Clients</p>
                                </div>
                            </div>
                            <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                                <FaProjectDiagram className='text-[#F2AA3D] text-3xl mr-4' />
                                <div>
                                    <h4 className='text-xl font-semibold'>200+</h4>
                                    <p className='text-sm text-neutralGrey'>Projects Completed</p>
                                </div>
                            </div>
                            <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                                <FaStar className='text-[#F2AA3D] text-3xl mr-4' />
                                <div>
                                    <h4 className='text-xl font-semibold'>98%</h4>
                                    <p className='text-sm text-neutralGrey'>Client Satisfaction</p>
                                </div>
                            </div>
                            <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                                <FaClock className='text-[#F2AA3D] text-3xl mr-4' />
                                <div>
                                    <h4 className='text-xl font-semibold'>10+ Years</h4>
                                    <p className='text-sm text-neutralGrey'>Expirience</p>
                                </div>
                            </div>
                            {/* <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                                <FaDollarSign className='text-[#F2AA3D] text-3xl mr-4' />
                                <div>
                                    <h4 className='text-xl font-semibold'>Over $1M</h4>
                                    <p className='text-sm text-neutralGrey'>Cost Savings for Clients</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
)
}

export default About
