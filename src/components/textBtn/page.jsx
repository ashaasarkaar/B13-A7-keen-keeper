'use client'
import { MdOutlineTextsms } from "react-icons/md";
import { toast } from "react-toastify";

const TextBtn = ({ friendDetailInfo }) => {

    const { name } = friendDetailInfo;

    const handleText = () => {
        toast.success(`Text with ${name}...`)
    }

    return (

        <div onClick={handleText} className='bg-base-200 shadow-xl rounded-2xl p-10 space-y-2'>

            <MdOutlineTextsms size={30} className='mx-auto' />
            <p>Text</p>

        </div>
    );
};

export default TextBtn;