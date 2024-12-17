import React, { useState } from 'react';
import contactImage from "../assets/contactUs.png"; // Replace with your actual image path

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'id="contact">
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-1/2'>
                    <img src={contactImage} alt="Contact Us" className='' />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 text-center'>
                        Get in Touch
                    </h2>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700' htmlFor='name'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700' htmlFor='email'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700' htmlFor='subject'>
                                Subject
                            </label>
                            <input
                                type='text'
                                id='subject'
                                name='subject'
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700' htmlFor='message'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows='4'
                                className='mt-1 block w-full border border-gray-300 rounded-md p-2'
                            />
                        </div>
                        <button type='submit' className='btn-primary w-full'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
               {/* Office Address and Social Links Section
            <div className='mt-12 text-center'>
                <h3 className='text-2xl text-neutralDGrey font-semibold mb-4'>Our Office</h3>
                <p className='text-sm text-gray-600 mb-2'>1234 Main St, Suite 100, City, State, ZIP</p>
              
            </div> */}

        </div>
    );
};

export default ContactUs;