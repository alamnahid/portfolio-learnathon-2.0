import SectionTitle from "../Shared/Section Title/SectionTitle";
import "./MyProject.css"
// import ss from "../../assets/ss.png"
import ProjectSkillGain from "./ProjectSkillGain";
import goto from "../../assets/goto.svg"
import { Button } from "react-scroll";
import { useState } from "react";
import rivo from "../../assets/rivo.png"
import mobile from "../../assets/mobile.png"
import golf from "../../assets/golf.png"
import plant from "../../assets/plant.png"


const Projects = () => {
    const [showAll, setShowAll] = useState(false)

    return (
        <div className="md:mx-[10%] mt-32">
            <SectionTitle title={'Work'} semititle={'Some of the noteworthy projects I have built:'} />

            <div className="mt-20 space-y-12">

                <div className="w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row justify-center items-center">

                    <div className="lg:w-[50%] lg:rounded-tl-2xl lg:rounded-bl-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={rivo} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tr-2xl lg:rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Rivo Fashion: Elevating Style with an Online Shopping Experience</h1>
                            <p className="text-[#D1D5DB] mt-6">Introducing Rivo Fashion, your one-stop destination for the latest trends in clothing! 🛍️ Explore a curated collection of high-quality apparel that blends comfort and style effortlessly.</p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React Router'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://letsyourskillup.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-client-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-server-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>



                {/* second project  */}

                <div className="w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row-reverse justify-center items-center">

                    <div className="lg:w-[50%] lg:rounded-tr-2xl lg:rounded-br-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={plant} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tl-2xl lg:rounded-bl-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Plan A Plant - Plant E-Commerce Website</h1>
                            <p className="text-[#D1D5DB] mt-6">Welcome to Plan A Plant, a plant e-commerce website where users can explore a variety of plants, read helpful blogs on plant care, avail discounted products, and interact with a user-friendly interface.</p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React Router'} />
                                <ProjectSkillGain skillname={'Nodejs'} />
                                <ProjectSkillGain skillname={'Expressjs'} />
                                <ProjectSkillGain skillname={'MongoDB'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://letsyourskillup.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-client-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-server-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

                {/* third project  */}

                <div className="w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row justify-center items-center">

                    <div className="lg:w-[50%] lg:rounded-tl-2xl lg:rounded-bl-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={golf} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tr-2xl lg:rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">SideCup Family Golf: Where Fun Swings with Every Stroke ⛳🌿</h1>
                            <p className="text-[#D1D5DB] mt-6">Embark on a golfing adventure with SideCup Family Golf – the ultimate destination for family-friendly golfing experiences! 🏌️‍♂️⛳ Bring your loved ones together for a day of laughter, friendly competition, and unforgettable memories on our scenic golf course.</p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React Router'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://letsyourskillup.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-client-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-server-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>





                {/* fourth project  */}

                <div className={`w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row-reverse justify-center items-center ${showAll? 'block' : 'hidden'}`}>

                    <div className="lg:w-[50%] lg:rounded-tr-2xl lg:rounded-br-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={mobile} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tl-2xl lg:rounded-bl-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Hot Gadget Mobile Shop: Unleashing Cutting-Edge Tech at Your Fingertips</h1>
                            <p className="text-[#D1D5DB] mt-6">IWelcome to Hot Gadget Mobile Shop, where innovation meets style! 🚀 Discover the hottest and most cutting-edge mobile devices in the market, all in one place.</p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'React Router'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://letsyourskillup.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-client-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/jannat-jui/lets-your-skills-up-server-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={`text-center mt-20 ${showAll ? 'hidden' : 'block'}`}>
                    <Button onClick={() => setShowAll(!showAll)} className="bg-[#27AE60] btn text-white font-semibold text-lg border-none w-[10rem]">Show All</Button>
                </div>
            </div>

        </div>
    );
};

export default Projects;