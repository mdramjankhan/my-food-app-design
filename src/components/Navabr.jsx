import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#d7e9f5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-black text-2xl font-bold logo">Food Corner</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a
                                href="#"
                                className="text-black hover:text-slate-400 px-3 py-2 rounded-md text-lg font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-black hover:text-slate-400 px-3 py-2 rounded-md text-lg font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-black hover:text-slate-400 px-3 py-2 rounded-md text-lg font-medium"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="text-black hover:text-slate-400 px-3 py-2 rounded-md text-lg font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className=" inline-flex items-center justify-center p-2 rounded-md text-gray-500  focus:outline-none  focus:ring-offset-gray-100 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state */}
            <div
                className={`${isOpen ? "block" : "hidden"} md:hidden`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#"
                        className="text-black hover:text-slate-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-black hover:text-slate-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-black hover:text-slate-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="text-black hover:text-slate-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
