"use client";

import { createContext, useContext, useState } from "react";

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {

    const [friends, setFriends] = useState([]);

    const addFriend = (friend, type) => {

        const contactData = {
            ...friend,
            contactType: type,
            currentTime: new Date().toLocaleTimeString()
        }

        setFriends((prev) => {

            // const alreadyExists = prev.some(
            //     (item) => item.id === friend.id
            // );

            // if (alreadyExists) {
            //     return prev;
            // }

            return [...prev, contactData];
        });

    };

    return (

        <FriendContext.Provider value={{ friends, addFriend }}>
            {children}
        </FriendContext.Provider>
    );
};

export const useFriend = () => {
    return useContext(FriendContext);
};