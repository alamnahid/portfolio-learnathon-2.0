import SectionTitle from "../Shared/Section Title/SectionTitle";
import mypic from "../../assets/Md. Nahid Alam.jpg"
import "./DownloadButton.css"
import { saveAs } from 'file-saver';

const AboutMe = () => {
    const handleDownload = () => {
        // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
        const pdfPath = '../../assets/Md Nahid Alam.pdf';
    
        // Trigger the download
        saveAs(pdfPath, 'Your_Resume.pdf');
      };
    return (
        <div className="mx-[8%]">
            <SectionTitle title={'About me'}/>

            <div className="flex justify-evenly items-center mt-20">
               

                <div className="w-[50vw]">
                    <h1 className="text-[2rem] font-bold text-[#F9FAFB]">Curious about me? Here you have it:</h1>
                    <p className="text-base leading-[1.5rem] text-justify mt-7 text-[#D1D5DB]">
                        Hi, I am Nahid, a dedicated front-end developer with a keen eye for creating seamless and visually stunning user experiences. My expertise lies in leveraging the power of React.js to build dynamic and responsive web applications that meet and exceed client expectations. <br />

                        I have extensive experience organizing events on topics related to programming and student development. 𝐎𝐯𝐞𝐫 𝐭𝐡𝐞 𝐩𝐚𝐬𝐭 𝟑 𝐲𝐞𝐚𝐫𝐬, I have dedicated myself to creating spaces that foster learning, collaboration, and community building. With extensive experience as the lead organizer for events such as the National Girls Programming Contest and the Bangladesh Olympiad in Informatics, I have honed my skills in seamlessly bringing together developers and students from diverse backgrounds.

                        Whether you are looking to collaborate, share ideas, or explore opportunities, I am always open to connecting with like-minded professionals. Lets build the future of the web together!
                    </p>

                    <div onClick={handleDownload} className="button ">
                        My Resume
                        <span>
                            <span></span>
                        </span>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-[25rem] opacity-50 h-[30rem] bg-[#374151]">
                       
                    </div>

                    <div className="w-[25rem] h-[30rem] absolute -top-10 left-10">
                    <img className="w-[25rem] h-[30rem]" src={mypic} alt="" />

                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;