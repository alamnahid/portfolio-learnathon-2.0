import education from "../../assets/education.png"

const EducationTimeLine = () => {
    return (
        <div className="mt-20">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div  className="timeline-middle">
                        <img className="w-[4.5rem] h-[4.5rem]" src={education} alt="" />
                    </div>
                    <div  data-aos="fade-down" data-aos-duration="2000" className="timeline-start lg:w-[35vw] md:text-end mb-10 bg-[#110e0e] border-b-4 rounded-b-lg hover:shadow-xl hover:shadow-gray-700 p-5">
                        <time className="font-mono italic">2020-2023</time>
                        <div className="text-2xl font-black">B.SC Engineering</div>
                        <div className="lg:text-xl font-black">Depertment of Computer Science & Engineering (CSE)</div>
                        <p className="mt-4">
                            <span className="text-lg">Daffodil International University</span> <br />
                            Birulia, Savar, Dhaka <br />
                            CGPA: 3.54 out of 4.00
                        </p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <img className="w-[4.5rem] h-[4.5rem]" src={education} alt="" />
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="3000" className="timeline-end lg:w-[35vw] mb-10 bg-[#110e0e] border-b-4 rounded-b-lg hover:shadow-xl hover:shadow-gray-700 p-5">
                    <time className="font-mono italic">2017-2019</time>
                        <div className="text-2xl font-black">Higher Secondary Certificate (H.S.C)</div>
                        <div className="lg:text-xl font-black">Science</div>
                        <p className="mt-4">
                            <span className="text-lg">Adamjee Cantonment College</span> <br />
                            Dhaka, Cantonment, Dhaka <br />
                            GPA: 4.83 out of 5.00
                        </p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <img className="w-[4.5rem] h-[4.5rem]" src={education} alt="" />
                    </div>
                    <div  data-aos="fade-down"  data-aos-duration="4000"className="timeline-start lg:w-[35vw] md:text-end mb-10 bg-[#110e0e] border-b-4 rounded-b-lg hover:shadow-xl hover:shadow-gray-700 p-5">
                    <time className="font-mono italic">2017</time>
                        <div className="text-2xl font-black">Secondary School Certificate (S.S.C)</div>
                        <div className="lg:text-xl font-black">Science</div>
                        <p className="mt-4">
                            <span className="text-lg">Comilla Cantonment High School</span> <br />
                            Comilla Cantonement, Comilla <br />
                            GPA: 5.00 out of 5.00
                        </p>
                    </div>
                    <hr />
                </li>
               
               
            </ul>

        </div>
    );
};

export default EducationTimeLine;