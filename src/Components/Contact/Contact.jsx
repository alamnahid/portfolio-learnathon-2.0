import SectionTitle from "../Shared/Section Title/SectionTitle";



const Contact = () => {
    return (
        <div className="mt-20 pb-32 mx-[10%]">
            <SectionTitle title={'Get in Touch'} />

            <form className="mt-20 mx-auto text-center" action="">
                <div className="flex gap-8 justify-center items-center">
                    <input className="w-[22rem] pl-4 text-xl text-gray-100 bg-transparent border-b-2 border-gray-500 rounded-b-md outline-none hover:shadow-sm hover:shadow-gray-400 h-[3.5rem]" placeholder="First name" type="text" name="name" id="" />

                    <input className="w-[22rem] pl-4 text-xl text-gray-100 bg-transparent border-b-2 border-gray-500 rounded-b-md outline-none hover:shadow-sm hover:shadow-gray-400 h-[3.5rem]" placeholder="Last name" type="text" name="name" id="" />

                </div>

                <input className="w-[46rem] mt-8 pl-4 text-xl text-gray-100 bg-transparent border-b-2 border-gray-500 rounded-b-md outline-none hover:shadow-sm hover:shadow-gray-400 h-[3.5rem]" placeholder="Your email" type="text" name="name" id="" />
                <br />

                <textarea className="w-[46rem] mt-8 pl-4 text-xl text-gray-100 bg-transparent border-b-2 border-gray-500 rounded-b-md outline-none hover:shadow-sm hover:shadow-gray-400" id="w3review" name="w3review" rows="4" cols="50" placeholder="Message">
                    
                </textarea>

               <div className="text-center">
               <input className="w-[9rem] h-[2.6.25rem] btn btn-neutral bg-[#27AE60] text-white text-lg mt-5" type="submit" value="Submit" />
               </div>

            </form>

        </div>
    );
};

export default Contact;