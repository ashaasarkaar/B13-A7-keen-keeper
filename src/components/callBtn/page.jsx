'use client'
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { toast } from 'react-toastify';

const CallBtn = ({friendDetailInfo}) => {

 const {name} = friendDetailInfo;
    const handleCall = () =>{
        toast.success(`audio call with ${name}...`)
    }
    return (
        <div>
            <div onClick={handleCall} className='bg-base-200 shadow-xl rounded-2xl p-10 space-y-2'>
                <FiPhoneCall size={30} className='mx-auto' />
                <p>Call</p>
            </div>
        </div>
    );
};

export default CallBtn;