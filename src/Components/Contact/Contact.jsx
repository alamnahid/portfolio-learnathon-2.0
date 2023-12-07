import SectionTitle from "../Shared/Section Title/SectionTitle";
import email from "../../assets/email.svg"
import call from "../../assets/call.svg"
import SocialMediaButton from "../Banner/SocialMediaButton";

const Contact = () => {
    return (
        <div className="mt-20 pb-32">
            <SectionTitle title={'Get in Touch'} />
            
            <p className="text-[#D1D5DB] text-center text-xl">
            What’s next? Feel free to reach out to me if you are looking for <br /> a developer, have a query, or simply want to connect.
            </p>

            <div className="flex justify-center items-center gap-5 mt-12 ">
                <img src={email} alt="" />
                <p className="text-[#F9FAFB] text-[2rem] font-semibold">nahidalam13765@gmail.com</p>
            </div>


            <div className="flex justify-center items-center gap-5 mt-5 ">
                <img src={call} alt="" />
                <p className="text-[#F9FAFB] text-[2rem] font-semibold">+8801796281914</p>
            </div>

            <div className="mt-12">
                <p className="text-[#D1D5DB] text-center">You may also find me on these platforms!</p>
                <SocialMediaButton/>
            </div>
        </div>
    );
};

export default Contact;