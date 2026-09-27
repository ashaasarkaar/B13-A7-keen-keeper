"use client";

import React, { useState } from "react";

import { useFriend } from "@/components/context/FriendContext";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md";




const TimeLinePage = () => {

    const { friends } = useFriend();


    {/*useState For Filter Data By interaction Type START*/ }
    const [filter, setFilter] = useState("");
    {/*useState For Filter Data By interaction Type end*/ }

    {/*useState For Search Data By the Friend name Type START*/ }
    const [search, setSearch] = useState('')
    {/*useState For Search Data By the Friend name Type END*/ }

    {/*useState For Sorting Data By time START*/ }
    const [sortTime, setSortTime] = useState('')
    {/*useState For Sorting Data By time END*/ }



    const filteredFriends = friends.filter((friend) => {

        {/*Filter By contactType START*/ }
        const contactTypeMatch = filter === ''
            || filter === 'all'
            || friend.contactType === filter;

        {/*Filter By contactType END*/ }

        {/*Search By Friend Name START*/ }

        const friendNameMatch = friend.name.toLowerCase().includes(search.toLocaleLowerCase())

        {/*Search By Friend Name END*/ }

        return contactTypeMatch && friendNameMatch;


    })


    {/*Code For Sorting By Time START*/} 
    const sortByTime = [...filteredFriends].sort((a, b)=>{
        if(sortTime === 'newest'){
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
        return new Date(a.createdAt) - new Date(b.createdAt)
    })
    {/*Code For Sorting By Time END*/} 





    return (

        <div className="bg-base-200">
            <div className="py-20  w-9/12 mx-auto">

                <h1 className="text-5xl font-bold mb-2">
                    Timeline
                </h1>



              <div className="grid grid-rows-1 md:grid-cols-3 space-y-2 md:space-x-0">

                  {/* For Filtering Code START */}
                <select
                    className="select select-bordered"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="" disabled>
                        Filter By contactType
                    </option>

                    <option value="all">All</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
                {/* For Filtering Code END */}

                {/* For Search Friend By their Name START */}
                <input
                    className="input input-bordered"
                    type="text"
                    placeholder="Search by friend name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* For Search Friend By their Name END */}

                {/* Sorting By Time START */}
                <select 
                value={sortTime}
                onChange={(e) => setSortTime(e.target.value)}
                 className="select select-bordered">
                    <option value='' disabled>Sorting By Time</option>
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                </select>
                {/* Sorting By Time END */}


              </div>



                <div className="mt-5 space-y-5">

                    {sortByTime.map((friend, index) => (

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