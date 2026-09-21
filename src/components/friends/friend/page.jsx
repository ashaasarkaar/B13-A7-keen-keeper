import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Friend = ({friend}) => {

    const{name, picture, days_since_contact, status, tags} = friend;

    return (
       
       <div>

     <Link href={`/pages/friendDetail/${friend.id}`}>

        {/* Card Body START */}
        <div  className='text-center shadow-2xl bg-white rounded-2xl py-10 space-y-3'>
        <Image 
        src={picture}
        alt={name}
        width={80}
        height={80}
        className='mx-auto'
        >
        </Image>
        <h4 className='font-bold text-xl'>{name}</h4>
        <p className='text-[#64748B]'>{days_since_contact}d ago</p>
        <div className='space-x-3'>
            {
                tags.map((tag, index) => <button className='btn btn-sm rounded-full bg-[#CBFADB]' key={index}>{tag}</button>)
            }
        </div>

        <button className={`btn rounded-full text-white  ${status === 'almost due'
         ? 'bg-[#EFAD44]'
         : status === 'overdue'
         ? 'bg-[#EF4444]'
         : 'bg-[#244D3F]'
        }`}>{status}</button>

       </div>
       {/* Card Body END */}
     </Link>

       </div>
    );
};

export default Friend;