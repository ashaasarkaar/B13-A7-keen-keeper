import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='mt-20 bg-[#244D3F] space-y-4 px-20 py-20'>
            <div className='space-y-3'>
                <h1 className='text-7xl text-center text-white'>KeenKeeper</h1>
            <p className='text-center text-white text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>

            <div className='space-y-2'>
                <p className='text-center text-white'>Social Links</p>

                <div className='text-center space-x-3'>
                    <div className='bg-white rounded-full p-3 inline-flex '><FaSquareInstagram className="text-black dark:text-black"  /></div>
                    <div className='bg-white rounded-full p-3 inline-flex '><FaFacebookSquare className="text-black dark:text-black" /></div>
                    <div className='bg-white rounded-full p-3 inline-flex '><FaXTwitter className="text-black dark:text-black"  /></div>
                </div>

            </div>

            <div className='divider'></div>
            <div className='text-white flex justify-between items-center text-sm'>
                <div>
                    <p>&copy;2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service  </p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;