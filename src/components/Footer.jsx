import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { FaEnvelope, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import LogoDark from '../assets/Logo Dark.svg';

const Footer = () => {
return (
<footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="flex flex-col">
                <a href="https://yourwebsite.com" className="flex items-center mb-4">
                    <img src={LogoDark} className='w-10 inline-block items-center' alt="Entropix Logo" />
                    <span className="ml-2 text-xl font-bold">Entropix</span>
                </a>
                <p className="text-sm">Empowering Business Growth Through Innovative Digital Solutions..</p>
            </div>

            {/* About Links */}
            <div>
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <ul>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-100}
                            className="text-gray-400 hover:text-white">
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="service" spy={true} smooth={true} offset={-100}
                            className="text-gray-400 hover:text-white">
                        Our Services
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={-100}
                            className="text-gray-400 hover:text-white">
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Follow Us Links */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="blog" spy={true} smooth={true} offset={-100}
                            className="text-gray-400 hover:text-white">
                        Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="careers" spy={true} smooth={true} offset={-100}
                            className="text-gray-400 hover:text-white">
                        Careers
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Legal Links */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Legal</h3>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="privacy" spy={true} smooth={true} offset={-100}
                            className="text-gray-400 hover:text-white">
                        Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="terms" spy={true} smooth={true} offset={-100}
                            className="text-gray-400 hover:text-white">
                        Terms & Conditions
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Contact Section */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <address className="text-gray-400 text-sm">
                    LalGanesh ,Ananda Nagar ,Guwahati ,Assam ,781034
                </address>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
            <div className="flex justify-between items-center">
                <p className="text-sm">© {new Date().getFullYear()} Entropix. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="mailto:contact@entropix.in" className="text-gray-400 hover:text-white">
                        <FaEnvelope size={24} />
                    </a>

                    {/* <a href="https://www.instagram.com/Entropix/" className="text-gray-400 hover:text-white">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://twitter.com/Entropix" className="text-gray-400 hover:text-white">
                        <FaTwitter size={24} />
                    </a> */}
                    <a href="https://github.com/Entropix-in" className="text-gray-400 hover:text-white">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
);
};

export default Footer;
