import SectionTitle from "../Shared/Section Title/SectionTitle";
import mypic from "../../assets/Md. Nahid Alam.jpg"
import "./DownloadButton.css"
import { saveAs } from 'file-saver';

const AboutMe = () => {
    const handleDownload = () => {
        const pdfFilePath = '../../../public/Md Nahid Alam.pdf';
        saveAs(pdfFilePath, 'downloaded-file.pdf');
      };
    return (
        <div id="about" className="mx-[8%] mt-20 lg:mt-0">
            <SectionTitle title={'About me'}/>

            <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly items-center mt-20">
               

                <div className=" md:w-[70vw] lg:w-[50vw]">
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

                <div data-aos="zoom-in-up" data-aos-duration="2000" className="relative hover:bg-[#27AE60] hover:shadow-xl hover:shadow-red-700">
                    <div className="w-[20rem] md:w-[25rem] opacity-50 h-[25rem] md:h-[30rem] bg-[#374151] hover:bg-[#27AE60]">
                       
                    </div>

                    <div className="w-[20rem] md:w-[25rem] h-[25rem] md:h-[30rem] absolute -top-10 left-10">
                    <img className="w-[20rem] md:w-[25rem] h-[25rem] md:h-[30rem]" src={mypic} alt="" />

                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;