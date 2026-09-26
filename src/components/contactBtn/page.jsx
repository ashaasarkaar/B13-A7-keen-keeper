
"use client";

import React from "react";

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md";

import { toast } from "react-toastify";

import { useFriend } from "@/components/context/FriendContext";

const ContactBtn = ({ friendDetailInfo, type }) => {
    
    const { name } = friendDetailInfo;

    const { addFriend } = useFriend();

    const handleClickBtn = () => {
        if (type === "call") {
            toast.success(`audio call with ${name}...`);
        }

        if (type === "text") {
            toast.success(`texting with ${name}...`);
        }

        if (type === "video") {
            toast.success(`video call with ${name}...`);
        }

        addFriend(friendDetailInfo, type);

        console.log("HANDLE CLICK");
        console.log("FRIEND ADDED:", friendDetailInfo);
    };

    return (
        <div>
            <div
                onClick={handleClickBtn}
                className="bg-base-200 shadow-xl rounded-2xl p-10 space-y-2"
            >
                {type === "call" && (
                    <FiPhoneCall
                        size={30}
                        className="mx-auto"
                    />
                )}

                {type === "text" && (
                    <MdOutlineTextsms
                        size={30}
                        className="mx-auto"
                    />
                )}

                {type === "video" && (
                    <MdOutlineVideocam
                        size={30}
                        className="mx-auto"
                    />
                )}

                <p>
                    {type === "call" && "Call"}
                    {type === "text" && "Text"}
                    {type === "video" && "Video"}
                </p>
            </div>
        </div>
    );
};

export default ContactBtn;


