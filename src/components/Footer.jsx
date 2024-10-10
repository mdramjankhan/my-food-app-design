import React from "react";

const Footer = () => {
    return (
        <footer className="bgf text-slate-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:justify-between">
                    {/* Footer Links */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Links</h3>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline hover:text-white text-sm"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline hover:text-white text-sm"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline hover:text-white text-sm"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline hover:text-white text-sm"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h3>
                        <p className="text-sm">
                            123 Street Name, City, Country
                        </p>
                        <p className="text-sm">
                            Phone: +91 7872857822
                        </p>
                        <p className="text-sm">
                            Email: rk9032929@gmail.com
                        </p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557a9.906 9.906 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.875 9.875 0 01-3.127 1.194 4.92 4.92 0 00-8.384 4.482A13.963 13.963 0 011.67 3.149a4.916 4.916 0 001.523 6.565 4.903 4.903 0 01-2.228-.616v.062a4.922 4.922 0 003.946 4.827 4.93 4.93 0 01-2.224.084 4.93 4.93 0 004.604 3.417A9.869 9.869 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.004-.426-.014-.637A10.033 10.033 0 0024 4.557z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c-5.094 0-9.213 4.118-9.213 9.213 0 4.01 2.628 7.415 6.26 8.575-.088-.645-.167-1.644.034-2.344.177-.627 1.143-3.99 1.143-3.99s-.29-.58-.29-1.437c0-1.348.781-2.354 1.754-2.354.826 0 1.224.621 1.224 1.366 0 .831-.527 2.072-.799 3.224-.23.972.486 1.764 1.445 1.764 1.734 0 3.065-1.83 3.065-4.463 0-2.335-1.676-3.97-4.07-3.97-2.775 0-4.41 2.082-4.41 4.228 0 .833.321 1.729.723 2.216.08.097.092.181.07.277-.08.31-.257.986-.292 1.12-.046.177-.148.217-.342.132-1.274-.518-2.071-2.141-2.071-3.86 0-2.809 2.051-5.393 5.925-5.393 3.105 0 5.516 2.226 5.516 5.198 0 3.081-1.941 5.558-4.63 5.558-1.195 0-2.319-.639-2.707-1.365l-.734 2.797c-.267 1.03-1.005 2.318-1.497 3.095.855.267 1.76.413 2.705.413 5.095 0 9.213-4.119 9.213-9.213 0-5.095-4.118-9.213-9.213-9.213z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.162 0H1.84A1.843 1.843 0 000 1.842v20.32A1.843 1.843 0 001.84 24h20.32a1.843 1.843 0 001.84-1.84V1.84A1.843 1.843 0 0022.162 0zm-13.77 20.195V9.196h3.097v10.999h-3.097zm1.55-12.414a1.823 1.823 0 110-3.646 1.823 1.823 0 010 3.646zm10.631 12.414h-3.096V14.25c0-1.407-.028-3.222-1.962-3.222-1.963 0-2.265 1.535-2.265 3.115v6.052h-3.096V9.196h2.97v1.506h.042c.412-.781 1.418-1.606 2.921-1.606 3.125 0 3.699 2.056 3.699 4.731v6.368z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Food Corner. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
