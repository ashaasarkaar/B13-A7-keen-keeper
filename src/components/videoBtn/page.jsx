'use client'
import { MdOutlineVideocam } from "react-icons/md";
import { toast } from "react-toastify";

const VideoBtn = ({ friendDetailInfo }) => {

    const { name } = friendDetailInfo;

    const handleVideo = () => {

        toast.success(`Video Call with ${name}...`)
    }

    return (

        <div onClick={handleVideo} className='bg-base-200 shadow-xl rounded-2xl p-10 space-y-2'>

            <MdOutlineVideocam size={30} className='mx-auto' />
            <p>Video</p>

        </div>
    );
};

export default VideoBtn;