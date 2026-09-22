'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { toast } from 'react-toastify';

const ContactBtn = ({ friendDetailInfo, type }) => {
    const { id, name } = friendDetailInfo;


    // console.log('Friend Info:', friendDetailInfo);
    // console.log('Friend ID:', id);

    const router = useRouter();
    const handleClickBtn = () => {

        if (type === 'call') {
            toast.success(`audio call with ${name}...`)
        }
        if (type === 'text') {
            toast.success(`texting with ${name}...`)
        }
        if (type === 'video') {
            toast.success(`video call with ${name}...`)
        }

        // console.log('ID Before Push:', id);

        router.push(`/pages/timeline?tFndId=${id}`);

    }
    return (
        <div>

            <div onClick={handleClickBtn} className='bg-base-200 shadow-xl rounded-2xl p-10 space-y-2'>

                {type === 'call' && <FiPhoneCall size={30} className='mx-auto' />}

                {type === 'text' && <MdOutlineTextsms size={30} className='mx-auto' />}

                {type === 'video' && <MdOutlineVideocam size={30} className='mx-auto' />}

                <p>
                    {type === 'call' && 'Call'}
                    {type === 'text' && 'Text'}
                    {type === 'video' && 'Video'}
                </p>


            </div>

        </div>
    );
};

export default ContactBtn;