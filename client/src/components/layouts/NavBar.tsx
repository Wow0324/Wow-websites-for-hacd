import { useState, useEffect } from "react";
import {
    Navbar,
    Collapse,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 items-center lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
                <Link to="/bidding" className="text-secondary font-bold hover:text-nav-hover">$HACD Bidding</Link>
            </li>
            <li>
                <Link to="/hacd" className="text-secondary font-bold hover:text-nav-hover">$HACD Diamonds</Link>
            </li>
            <li>
                <Link to="https://sea.hacash.diamonds" target="_blank" className="text-secondary font-bold hover:text-nav-hover">$HACD Exchange</Link>
            </li>
            <li>
                <Link to="/gpu" className="text-secondary font-bold hover:text-nav-hover">$GPU Pool</Link>
            </li>
        </ul>
    );

    return (
        <div className="bg-white sticky top-0 z-10">
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:py-4 rounded-none shadow-none">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Link to="/" className="flex flex-row font-bold text-secondary text-xl sm:text-2xl hover:text-nav-hover items-center">
                        <img src={require("../../assets/images/logo-white-121x121.jpg")} className='h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] mr-1' />
                        Welcome To WOWPOOL
                    </Link>
                    <div className="hidden lg:block">{navList}</div>

                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                    </div>
                </Collapse>
            </Navbar>
        </div>



    );
}

export default NavBar;