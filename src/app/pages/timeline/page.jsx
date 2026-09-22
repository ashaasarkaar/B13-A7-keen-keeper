'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';

const TimeLinePage = () => {
    const searchParams = useSearchParams();
    const tFndId = searchParams.get('tFndId')
    console.log('Friend ID For TimeLine', tFndId)

    return (
        <div className='pt-10 w-9/12 mx-auto'>
            <h1 className='text-5xl font-bold'>Timeline</h1>
            <input className='input rounded-md mt-5' type='text' placeholder='Filter timeline'></input>
            
        </div>
    );
};

export default TimeLinePage;