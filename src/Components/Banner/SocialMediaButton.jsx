
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";




const SocialMediaButton = () => {
  

  return (
    <div className='mt-12 flex justify-center items-center gap-5'>

    <div className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <FaLinkedin className='text-xl text-white'/>
    </div>
    <div className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <FaGithub className='text-xl text-white'/>
    </div>
    <div className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <MdEmail className='text-xl text-white'/>
    </div>
    <div className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <RiContactsFill className='text-xl text-white'/>
    </div>

    </div>
  );
};

export default SocialMediaButton;
