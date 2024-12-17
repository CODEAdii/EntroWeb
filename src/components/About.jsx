import React, { useState } from 'react';
import about from "../assets/aboutUs.png";
import { FaUsers, FaProjectDiagram, FaStar, FaClock } from 'react-icons/fa';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="about">
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={about} alt="About Us" />
          </div>
          <div className='md:2-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
              Building a Future with Technology
            </h2>
            <p className='md:3/4 text-sm text-neutralDGrey mb-8'>
              Entropix, established two years ago, is dedicated to transforming businesses with cutting-edge solutions. 
              From ERP systems to websites, apps, and hosting, we empower companies to excel in a competitive digital landscape.
            </p>
            <button 
              className='btn-primary'
              onClick={handleLearnMore}
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
        {showMore && (
       <div className='mt-8 px-6 lg:px-14 text-neutralDGrey text-sm border-l-4 border-neutralGrey hover:border-[rgb(242,170,61)] bg-white shadow-md rounded-md transition-all duration-300 hover:-translate-y-1'>
       <div className='py-8'>
         <h3 className='text-3xl font-semibold mb-6 text-[#F2AA3D]'>About Entropix</h3>
         <p className='leading-relaxed text-justify'>
           Entropix is dedicated to providing tailored digital solutions that empower businesses to thrive in the digital age. 
           With expertise in creating cutting-edge ERP systems, dynamic websites, intuitive mobile apps, and dependable hosting services, 
           we bring a unique blend of creativity and technical prowess to every project we undertake.
         </p>
         <p className='mt-4 leading-relaxed text-justify'>
           Our mission is to bridge the gap between technology and business, ensuring our clients achieve lasting success 
           in a competitive landscape. Over the past two years, we’ve built strong partnerships by focusing on client 
           satisfaction, delivering innovative solutions, and adapting to each business’s unique needs.
         </p>
         <p className='mt-4 leading-relaxed text-justify'>
           At Entropix, we believe in fostering collaboration, transparency, and excellence in every project, 
           making us a trusted partner for businesses aiming to harness the power of technology.
         </p>
       </div>
     </div>
     
       
        )}
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
                  <h4 className='text-xl font-semibold'>Satisfied Clients</h4>
                  <p className='text-sm text-neutralGrey'>We value every client and ensure their success.</p>
                </div>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                <FaProjectDiagram className='text-[#F2AA3D] text-3xl mr-4' />
                <div>
                  <h4 className='text-xl font-semibold'>Successful Projects</h4>
                  <p className='text-sm text-neutralGrey'>Delivering innovative and efficient solutions.</p>
                </div>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                <FaStar className='text-[#F2AA3D] text-3xl mr-4' />
                <div>
                  <h4 className='text-xl font-semibold'>Client Satisfaction</h4>
                  <p className='text-sm text-neutralGrey'>Committed to providing the best outcomes.</p>
                </div>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                <FaClock className='text-[#F2AA3D] text-3xl mr-4' />
                <div>
                  <h4 className='text-xl font-semibold'>Experience</h4>
                  <p className='text-sm text-neutralGrey'>Combining expertise with a passion for technology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
