import React from 'react';
import Friend from './friend/page';


const FriendsSection = async() => {
    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json()
    console.log(friends)
   
    return (
        <div className='text-base-content w-9/12 mx-auto'> 
            
                <h1 className='font-bold text-xl mb-5'>Your Friends</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {
                        friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                    }
                </div>
           
           
        </div>
    );
};

export default FriendsSection;