import React from 'react';
import { FaPlus } from 'react-icons/fa';

const BannerSection = () => {
    return (
        <div className='bg-[#F8FAFC] text-center p-20 space-y-5'>
            <h1 className='font-bold text-5xl'>Friends to keep close in your life</h1>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
        <button className='btn bg-[#244D3F] text-white'><FaPlus />Add a Friend</button>
        </div>
    );
};

export default BannerSection;