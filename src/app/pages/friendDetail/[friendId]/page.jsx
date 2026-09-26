
import React from 'react';
import Image from 'next/image';
import { RiDeleteBin5Line, RiNotificationSnoozeFill } from 'react-icons/ri';
import ContactBtn from '@/components/contactBtn/page';
import { FiArchive } from 'react-icons/fi';

const FriendDetailPage = async({params}) => {
    const {friendId} = await params;
    console.log(friendId)
    const res = await fetch('http://localhost:3000/friends.json')
     const data = await res.json();
     const friendDetailInfo = data.find(
    (friend) => friend.id == friendId
  );
  console.log(friendDetailInfo)
  const {name,status,tags,picture,bio,email,days_since_contact,goal,next_due_date} = friendDetailInfo;



    return (
        <div className='grid grid-rows-[1fr_2fr] lg:grid-cols-[1fr_2fr]   gap-5 w-9/12 mx-auto mt-10'>
            {/* left side START */}
            <div className='space-y-5'>
                 <div  className='text-center shadow-xl bg-base-100 text-base-content rounded-2xl py-12 space-y-3 px-20'>
                        <Image 
                        src={picture}
                        alt={name}
                        width={80}
                        height={80}
                        className='mx-auto'
                        >
                        </Image>
                        <h4 className='font-bold text-xl'>{name}</h4>
                       
                        <button className={`btn rounded-full text-white  ${status === 'almost due'
                         ? 'bg-[#EFAD44]'
                         : status === 'overdue'
                         ? 'bg-[#EF4444]'
                         : 'bg-[#244D3F]'
                        }`}>{status}</button>

                         <div className='space-x-3'>
                            {
                                tags.map((tag, index) => <button className='btn btn-sm rounded-full bg-[#CBFADB] dark:text-black' key={index}>{tag}</button>)
                            }
                        </div>
                        <p className='text-[#64748B] font-medium'>{bio}</p>
                        <p className='text-[#64748B]'>Preferred: {email}</p>
                
                       </div>
            <button className='w-full btn font-bold'><RiNotificationSnoozeFill className='text-xl' /> Snooze 2 weeks</button>
            <button className='w-full btn font-bold'><FiArchive className='text-xl' /> Archive</button>
            <button className='w-full btn text-red-500 font-bold'><RiDeleteBin5Line className='text-red-500 text-xl' /> Delete</button>


            </div>
             {/* left side END */}

             {/* right side START */}
             <div className='space-y-4'>
                {/* 1ST Row Design START */}
                <div className='grid grid-cols-3 gap-4 py-8'>

                    <div className='bg-base-100 text-base-content shadow-lg p-10 text-center rounded-xl'>
                        <span className='font-bold text-2xl text-[#244D3F]'>{days_since_contact}</span>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>

                    <div className='bg-base-100 text-base-content shadow-lg p-10 text-center rounded-xl'>
                        <span className='font-bold text-2xl text-[#244D3F]'>{goal}</span>
                        <p className='text-[#64748B]'>Goal (Days)</p>
                    </div>

                    <div className='bg-base-100 text-base-content shadow-lg p-10 text-center rounded-xl'>
                        <span className='font-bold text-2xl text-[#244D3F]'>{next_due_date}</span>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>

                </div>
                {/* 1ST Row Design END */}

                {/* 2nd Row START */}
                <div className='bg-base-100 text-base-content shadow-lg p-10 text-center rounded-xl flex justify-between items-center'>
                    <div className='space-y-4'>
                        <h2 className='text-[#244D3F] font-bold'>Relationship Goal</h2>
                        <h3 className='text-[#64748B]'>Connect every <span className='text-black font-bold'>{goal} days</span></h3>
                    </div>
                    <button className='btn'>Edit</button>
                </div>
                {/* 2nd Row END */}

                {/* 3rd Row START */}
                <div className='bg-base-100 text-base-content shadow-lg p-10  rounded-xl space-y-3'>

                    <h2 className='font-bold text-xl text-black '>Quick Check-In</h2>

                    <div className='grid grid-cols-3 gap-4 text-center'>

                       <ContactBtn type='call' friendDetailInfo={friendDetailInfo}></ContactBtn>

                       <ContactBtn type='text' friendDetailInfo={friendDetailInfo}></ContactBtn>

                       <ContactBtn type='video' friendDetailInfo={friendDetailInfo}></ContactBtn>
                       
                        
                    </div>

                </div>
                {/* 3rd Row END */}

             </div>
             {/* right side END */}
            
        </div>
    );
};

export default FriendDetailPage;