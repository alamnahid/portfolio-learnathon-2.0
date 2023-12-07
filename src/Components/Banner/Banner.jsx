import { TypeAnimation } from "react-type-animation";
import SocialMediaButton from "./SocialMediaButton";


const Banner = () => {
    return (
        <div className="min-h-[100vh] w-full text-center flex flex-col justify-center items-center">
            <p className="text-[#828282] text-xl font-medium dm">LET'S BUILD SOMETHING TOGETHER</p>

            <h1 className="text-[5rem] font-bold mt-3 text-white">Hi, I'm <span className="text-[#27AE60]">Nahid</span> Alam</h1>

            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'A Front-End Developer.',
                    1500,
                    'A Back-End Developer.',
                    1500,
                    'A MERN Stack Developer',
                    1500,
                    'A Web Developer',
                    1500,
                ]}
                speed={50}
                style={{ fontSize: '2.5em', }}
                className="dmsans mt-4 "
                repeat={Infinity}
            />

            <p className="mt-4 text-gray-400 dmsans">I concentrate on developing back-end <br /> technology-integrated responsive front-end web applications.</p>

            <SocialMediaButton/>

        </div>
    );
};

export default Banner;