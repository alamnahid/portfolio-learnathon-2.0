

const Navbar = () => {
    return (
        <div className="mx-[8%] sticky">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="">About</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Education</a></li>
                        <li><a href="">Experience</a></li>
                        <li><a href="">Project</a></li>
                            
                            
                            
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white text-[2.25rem] font-bold nova">Nahid <span className="text-[#94e720]">Alam</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" space-x-5 menu-horizontal px-1">
                        <li><a className="text-lg hover:text-green-700 hover:font-semibold" href="">About</a></li>
                        <li><a className="text-lg hover:text-green-700 hover:font-semibold" href="">Skills</a></li>
                        <li><a className="text-lg hover:text-green-700 hover:font-semibold" href="">Education</a></li>
                        <li><a className="text-lg hover:text-green-700 hover:font-semibold" href="">Experience</a></li>
                        <li><a className="text-lg hover:text-green-700 hover:font-semibold" href="">Project</a></li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline nova hover:bg-green-700 hover:text-white ">Contact</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;