import SectionTitle from "../Shared/Section Title/SectionTitle";
import "./MyProject.css"
// import ss from "../../assets/ss.png"
import ProjectSkillGain from "./ProjectSkillGain";
import goto from "../../assets/goto.svg"
import { Button } from "react-scroll";
import { useState } from "react";
import plant from "../../assets/plant.png"
import letsyourskill from "../../assets/letsyourskill.png"
import foods from "../../assets/foods.png"
import bistro from "../../assets/bistro.png"
import car from "../../assets/car.png"


const Projects = () => {
    const [showAll, setShowAll] = useState(false)

    return (
        <div className="md:mx-[10%] mt-32">
            <SectionTitle title={'Work'} semititle={'Some of the noteworthy projects I have built:'} />

            <div className="mt-20 space-y-12">

                <div className="w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row justify-center items-center">

                    <div className="lg:w-[50%] lg:rounded-tl-2xl lg:rounded-bl-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={plant} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tr-2xl lg:rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Plan A Plant - E-Commerce Website</h1>
                            <p className="text-[#D1D5DB] mt-6">
                                ⚪ Crafted an intuitive user interface using React and React Router, enhancing user navigation through plant categories, blogs, and discounted products. Implemented advanced search, sorting, and pagination features. <br />
                                ⚪ Developed a resilient backend infrastructure utilizing Node.js and Express, ensuring efficient communication with MongoDB for seamless data storage and retrieval.

                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'NodeJs'} />
                                <ProjectSkillGain skillname={'ExpressJs'} />
                                <ProjectSkillGain skillname={'MongoDB'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://plan-a-plant.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/plan-a-planet" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/plan-a-planet-server" target="_blank" rel="noreferrer">
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
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={letsyourskill} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tl-2xl lg:rounded-bl-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Lets Your Skill Up - Student and Class Management System</h1>
                            <p className="text-[#D1D5DB] mt-6">
                                ⚪ Implemented a visually appealing home page with dynamic sections, captivating potential users instantly. <br />
                                ⚪ Integrated Stripe for seamless and secure course enrollment and payment transactions. <br />
                                ⚪ Developed distinct dashboards for students, teachers, and admins, each tailored to their specific needs.

                            </p>

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
                                <a href="https://letsskillsup.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/online-learning-platform-client-MERN" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/online-learning-server-side" target="_blank" rel="noreferrer">
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
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={foods} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tr-2xl lg:rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">FoodSwapHub- Food Donation Website</h1>
                            <p className="text-[#D1D5DB] mt-6">
                                ⚪ Architected a responsive React frontend, ensuring an intuitive interface for donors and recipients. <br />
                                ⚪ Leveraged the power of MERN Stack to create a comprehensive food donation platform, ensuring a seamless full-stack experience for users. <br />
                                ⚪ Implemented a robust authentication system using Firebase and JWT, guaranteeing secure user interactions across the MERN stack.

                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'NodeJs'} />
                                <ProjectSkillGain skillname={'ExpressJs'} />
                                <ProjectSkillGain skillname={'MongoDB'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://foodswaphub.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/foodswaphub-client-side" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/foodswaphub-server" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>





                {/* fourth project  */}

                <div className={`w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row-reverse justify-center items-center ${showAll ? 'block' : 'hidden'}`}>

                    <div className="lg:w-[50%] lg:rounded-tr-2xl lg:rounded-br-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={bistro} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tl-2xl lg:rounded-bl-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Bistro Boss - Restaurant Management Website</h1>
                            <p className="text-[#D1D5DB] mt-6">
                                ⚪ Transformed static menus into dynamic delights, dynamically loading dishes from a MongoDB database. Redefined user engagement with a captivating homepage, featuring banners, featured foods, and customer reviews. <br />
                                ⚪ Orchestrated an intuitive admin dashboard, empowering administrators to effortlessly manage products, users, and system settings.

                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'NodeJs'} />
                                <ProjectSkillGain skillname={'ExpressJs'} />
                                <ProjectSkillGain skillname={'MongoDB'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://onebistroboss.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/bistro-boss-restaurant-management-client" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/bistro-boss-restaurant-server" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Server Side</button>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

                {/* fifth project  */}

                <div className="w-[90%] hover:shadow-2xl hover:shadow-gray-700 mx-auto xl:h-[27rem] lg:rounded-2xl flex flex-col lg:flex-row justify-center items-center">

                    <div className="lg:w-[50%] lg:rounded-tl-2xl lg:rounded-bl-2xl h-[27rem] bg-[#374151] ">
                        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[25rem] mt-4 overflow-hidden">
                            <img className="w-[90%] cursor-pointer rounded-lg mx-auto scroll-on-hover" src={car} alt="" />
                        </div>
                    </div>

                    <div className="lg:w-[50%] xl:h-[27rem] lg:rounded-tr-2xl lg:rounded-br-2xl bg-[#1f2937] opacity-70">

                        <div className="px-12 pt-12">
                            <h1 className="text-[#F9FAFB] text-xl font-semibold">Car Doctor - Your Trusted Car Repair Companion</h1>
                            <p className="text-[#D1D5DB] mt-6">
                                ⚪ Led the development of a full-stack web application using the MERN (MongoDB, Express.js, React, Node.js) stack. <br />
                                ⚪ Implemented real-time appointment scheduling, an interactive car diagnosis tool, and a transparent service tracking system.

                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 items-center">
                                <ProjectSkillGain skillname={'HTML'} />
                                <ProjectSkillGain skillname={'CSS'} />
                                <ProjectSkillGain skillname={'Tailwind CSS'} />
                                <ProjectSkillGain skillname={'Javascript'} />
                                <ProjectSkillGain skillname={'React'} />
                                <ProjectSkillGain skillname={'NodeJs'} />
                                <ProjectSkillGain skillname={'ExpressJs'} />
                                <ProjectSkillGain skillname={'MongoDB'} />
                                <ProjectSkillGain skillname={'Firebase'} />
                                <ProjectSkillGain skillname={'JWT'} />
                                <ProjectSkillGain skillname={'Animation'} />

                            </div>
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                                <a href="https://car-doctor-941fe.web.app/" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Live Link</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/car-doctor-client-site-with-JWT" target="_blank" rel="noreferrer">
                                    <div className="mt-3">
                                        <button className="btn text-white text-lg bg-[#374151] flex justify-center items-center"><img className=" w-[2rem] cursor-pointer" src={goto} alt="" />Client Side</button>
                                    </div>
                                </a>

                                <a href="https://github.com/alamnahid/car-doctor-server-site-with-JWT" target="_blank" rel="noreferrer">
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