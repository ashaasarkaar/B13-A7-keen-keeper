"use client";

import React, { useState } from "react";

import { useFriend } from "@/components/context/FriendContext";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md";




const TimeLinePage = () => {

     const { friends } = useFriend();

    const [filter, setFilter] = useState("");



    const filteredFriends = 
    filter === '' || filter === 'all'
    ? friends 
    : friends.filter(((friend) => friend.contactType === filter));



   



    console.log("All Selected Friends:", friends);


    return (

      <div className="bg-base-200">
          <div className="py-20  w-9/12 mx-auto">

            <h1 className="text-5xl font-bold mb-2">
                Timeline
            </h1>


            {/* <input
                className="input rounded-md mt-5"
                type="text"
                placeholder="Filter timeline"

                
            /> */}

            
          <select
    className="select select-bordered"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
>
    <option value="" disabled>
        Filter timeline
    </option>

    <option value="all">All</option>
    <option value="call">Call</option>
    <option value="text">Text</option>
    <option value="video">Video</option>
</select>
            
           


            <div className="mt-5 space-y-5">

                {filteredFriends.map((friend,index) => (

                    <div
                        key={index}
                        className="bg-base-100 shadow-xl rounded-md p-5 flex items-center gap-4"
                    >

                        {/* Left Side ICON START */}
                        <div>
                            {
                                friend.contactType === 'call'
                                    ? <FiPhoneCall
                                        size={36}
                                     
                                    />
                                    : friend.contactType === 'text'
                                        ? <MdOutlineTextsms
                                            size={36}
                                           
                                        />
                                        : <MdOutlineVideocam
                                            size={36}
                                           
                                        />
                            }
                        </div>
                        {/* Left Side ICON END */}


                        {/* Right Side Text Part START */}
                        <div className="space-y-2">
                            <h2 className="text-[#64748B] text-xl">
                               <span className="text-[#244D3F] text-2xl font-bold"> {friend.contactType}</span> with  {friend.name}
                            </h2>

                            <p className="text-[#64748B] text-xl">{friend.currentTime}</p>
                        </div>
                        {/* Right Side Text Part END */}

                    </div>

                ))}

            </div>

        </div>
      </div>
    );
};


export default TimeLinePage;