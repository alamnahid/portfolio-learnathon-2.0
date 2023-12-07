import SectionTitle from "../Shared/Section Title/SectionTitle";
import "./MyProject.css"
import ss from "../../assets/ss.png"
const Projects = () => {


    return (
        <div className="mx-[10%] mt-32">
            <SectionTitle title={'Work'} semititle={'Some of the noteworthy projects I have built:'} />

            <div className="mt-20">

                <div className="w-[90%] mx-auto h-[25rem] rounded-2xl flex justify-center items-center">

                    <div className="w-[50%] rounded-tl-2xl rounded-bl-2xl h-[25rem] bg-[#374151] opacity-60">
                        <div className="h-[23rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={ss} alt="" />
                        </div>
                    </div>

                    <div className="w-[50%] h-[25rem] rounded-tr-2xl rounded-br-2xl bg-[#1f2937] opacity-60">

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Projects;