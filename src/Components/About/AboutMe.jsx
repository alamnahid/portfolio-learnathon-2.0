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
            <SectionTitle title={'About'} semititle={'Introduction'}/>

            <div className="flex justify-between items-center">
                <div>
                    <img className=" h-[50vh]" src={mypic} alt="" />

                </div>

                <div className="w-[50vw]">
                    <h1 className="text-4xl font-bold">Who I Am</h1>
                    <p className="text-lg text-justify mt-7">
                        Hi, I'm Nahid, a dedicated front-end developer with a keen eye for creating seamless and visually stunning user experiences. My expertise lies in leveraging the power of React.js to build dynamic and responsive web applications that meet and exceed client expectations. <br />

                        I have extensive experience organizing events on topics related to programming and student development. 𝐎𝐯𝐞𝐫 𝐭𝐡𝐞 𝐩𝐚𝐬𝐭 𝟑 𝐲𝐞𝐚𝐫𝐬, I have dedicated myself to creating spaces that foster learning, collaboration, and community building. With extensive experience as the lead organizer for events such as the National Girls Programming Contest and the Bangladesh Olympiad in Informatics, I've honed my skills in seamlessly bringing together developers and students from diverse backgrounds.

                        Whether you're looking to collaborate, share ideas, or explore opportunities, I'm always open to connecting with like-minded professionals. Let's build the future of the web together!
                    </p>

                    <div onClick={handleDownload} className="button ">
                        My Resume
                        <span>
                            <span></span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;