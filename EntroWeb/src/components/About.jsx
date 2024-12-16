import React from 'react'
import about from "../assets/aboutUs.png";

const About = () => {
return (
<div>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className=' md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={about} alt="" srcset="" />
            </div>
            <div className='md:2-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p className='md:3/4 text-sm text-neutralDGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, eligendi animi. In, suscipit iusto. Nesciunt sed asperiores animi. Sed aliquid aspernatur quisquam quas eveniet. Ullam sit illo error alias fugit?</p>
                <button className='btn-primary'>Learn More</button>

            </div>
        </div>
    </div>
</div>
)
}

export default About
