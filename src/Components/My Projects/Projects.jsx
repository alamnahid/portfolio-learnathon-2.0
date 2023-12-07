import SectionTitle from "../Shared/Section Title/SectionTitle";
import "./MyProject.css"
import ss from "../../assets/ss.png"
import ProjectSkillGain from "./ProjectSkillGain";
import goto from "../../assets/goto.svg"
import { Button } from "react-scroll";
import { useState } from "react";


const Projects = () => {
    const [showAll, setShowAll] = useState(false)

    return (
        <div className="mx-[10%] mt-32">
            <SectionTitle title={'Work'} semititle={'Some of the noteworthy projects I have built:'} />

            <div className="mt-20 space-y-12">

                <div className="w-[90%] mx-auto h-[25rem] rounded-2xl flex justify-center items-center">

                    <div className="w-[50%] rounded-tl-2xl rounded-bl-2xl h-[25rem] bg-[#374151] opacity-60">
                        <div className="h-[23rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={ss} alt="" />
                        </div>
                    </div>

                    <div className="w-[50%] h-[25rem] rounded-tr-2xl rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Project Name</h1>
                            <p className="text-[#D1D5DB] mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                            </div>

                            <img className="mt-8 w-[3rem] cursor-pointer" src={goto} alt="" />


                        </div>

                    </div>

                </div>


                {/* second project  */}

                <div className="w-[90%] mx-auto h-[25rem] rounded-2xl flex flex-row-reverse justify-center items-center">

                    <div className="w-[50%] rounded-tr-2xl rounded-br-2xl h-[25rem] bg-[#374151] opacity-60">
                        <div className="h-[23rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={ss} alt="" />
                        </div>
                    </div>

                    <div className="w-[50%] h-[25rem] rounded-tl-2xl rounded-bl-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Project Name</h1>
                            <p className="text-[#D1D5DB] mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                            </div>

                            <img className="mt-8 w-[3rem] cursor-pointer" src={goto} alt="" />


                        </div>

                    </div>

                </div>


                {/* third project  */}

                <div className="w-[90%] mx-auto h-[25rem] rounded-2xl flex justify-center items-center">

                    <div className="w-[50%] rounded-tl-2xl rounded-bl-2xl h-[25rem] bg-[#374151] opacity-60">
                        <div className="h-[23rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={ss} alt="" />
                        </div>
                    </div>

                    <div className="w-[50%] h-[25rem] rounded-tr-2xl rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Project Name</h1>
                            <p className="text-[#D1D5DB] mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                            </div>

                            <img className="mt-8 w-[3rem] cursor-pointer" src={goto} alt="" />


                        </div>

                    </div>

                </div>


                {/* fourth project  */}

                <div className={`w-[90%] mx-auto h-[25rem] rounded-2xl flex justify-center items-center ${showAll? 'block' : 'hidden'}`}>

                    <div className="w-[50%] rounded-tl-2xl rounded-bl-2xl h-[25rem] bg-[#374151] opacity-60">
                        <div className="h-[23rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={ss} alt="" />
                        </div>
                    </div>

                    <div className="w-[50%] h-[25rem] rounded-tr-2xl rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Project Name</h1>
                            <p className="text-[#D1D5DB] mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React'} />
                            </div>

                            <img className="mt-8 w-[3rem] cursor-pointer" src={goto} alt="" />


                        </div>

                    </div>

                </div>

                <div className={`text-center mt-20 ${showAll?'hidden' : 'block'}`}>
                    <Button onClick={()=>setShowAll(!showAll)} className="bg-[#27AE60] btn text-white font-semibold text-lg border-none w-[10rem]">Show All</Button>
                </div>
            </div>

        </div>
    );
};

export default Projects;