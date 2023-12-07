
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";




const SocialMediaButton = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:nahidalam13765@gmail.com';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+8801796281914';
  };

  return (
    <div className='mt-12 flex justify-center items-center gap-5'>

    <a href="https://bd.linkedin.com/in/nahid-alam-518b431b2" target="_blank" rel="noreferrer">
    <div className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <FaLinkedin className='text-xl text-white'/>
    </div>
    </a>
    <a href="https://github.com/alamnahid" target="_blank" rel="noreferrer">
    <div className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <FaGithub className='text-xl text-white'/>
    </div>
    </a>


    
    <div onClick={handleEmailClick} className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <MdEmail className='text-xl text-white'/>
    </div>
    <div onClick={handleCallClick} className='w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] bg-black shadow-sm cursor-pointer hover:bg-green-800 shadow-white'>
        <RiContactsFill className='text-xl text-white'/>
    </div>

    </div>
  );
};

export default SocialMediaButton;
