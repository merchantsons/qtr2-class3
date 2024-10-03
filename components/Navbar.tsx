"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bg-sky-900 top-0 z-50 w-full">
            {/* Full navbar for larger screens */}
            <div className="hidden md:flex justify-between mx-auto w-11/12 p-5">
                <a href="/">
                    <div className='logo absolute ml-48'></div>
                </a>
                <h1 className="ml-56 font-bold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
                    Tuition Free Education Program on Latest Technologies
                </h1>
                <ul className="flex space-x-8 text-white pr-40">
                    <li><a href="/" className="font-semibold">Home</a></li>
                    <li><a href="/apply" className="font-semibold">Apply</a></li>
                    <li><a href="/jobs" className="font-semibold">Jobs</a></li>
                    <li><a href="/result" className="font-semibold">Result</a></li>
                </ul>

                <div className="relative inline-block text-left">
                    <div>
                        <button
                            onClick={toggleDropdown}
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-sky-800 text-sm font-medium text-gray-100 hover:bg-sky-600 focus:outline-none"
                        >
                            Assignment 2
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-sky-800 ring-1 ring-black ring-opacity-5 z-10 text-left">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link href="/csr">
                                    <div className="block px-4 py-2 text-xs text-gray-100 hover:bg-gray-700 " role="menuitem">
                                        CSR (Client-Side Rendering)
                                    </div>
                                </Link>
                                <Link href="/ssr">
                                    <div className="block px-4 py-2 text-xs text-gray-100 hover:bg-gray-700" role="menuitem">
                                        SSR (Server-Side Rendering)
                                    </div>
                                </Link>
                                <Link href="/ssg">
                                    <div className="block px-4 py-2 text-xs text-gray-100 hover:bg-gray-700" role="menuitem">
                                        SSG (Static Site Generation)
                                    </div>
                                </Link>
                                <Link href="/isr">
                                    <div className="block px-4 py-2 text-xs text-gray-100 hover:bg-gray-700 w-full" role="menuitem">
                                        ISR (Incremental Static Regeneration)
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

            </div>




            {/* Hamburger icon for small screens */}
            <div className="fixed md:hidden flex justify-between bg-sky-900 pl-5 pr-5 w-full p-3">
                <a href="/">
                    <div className='logo absolute'></div>
                </a>
                <h1 className="ml-8 mt-2 font-bold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
                    Tuition Free Education
                </h1>
                <div
                    className="hamburger-icon cursor-pointer flex flex-col justify-center items-center space-y-1 w-8 h-8"
                    onClick={toggleMenu}
                >
                    <div className="w-6 h-1 bg-white"></div>
                    <div className="w-6 h-1 bg-white"></div>
                    <div className="w-6 h-1 bg-white"></div>
                </div>
                {isMenuOpen && (
                    <div
                        className="menu absolute top-20 right-0 bg-sky-800 shadow-lg w-full p-5 z-0">
                        <ul className="space-y-4">
                            <li><a href="/" className="text-white hover:text-gray-200">Home</a></li>
                            <li><a href="/apply" className="text-white hover:text-gray-200">Apply</a></li>
                            <li><a href="/jobs" className="text-white hover:text-gray-200">Jobs</a></li>
                            <li><a href="/result" className="text-white hover:text-gray-200">Result</a></li>
                        </ul>


                        <div className="relative inline-block">
                            <div>
                                <button
                                    onClick={toggleDropdown}
                                    className="mt-5 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-sky-800 text-sm font-medium text-gray-100 hover:bg-sky-600 focus:outline-none"
                                >
                                    Assignment 2
                                    <svg className="-mr-1 ml-5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 10l5 5 5-5H7z" />
                                    </svg>
                                </button>
                            </div>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-sky-800 ring-1 ring-black ring-opacity-5 z-10 text-right">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link href="/csr">
                                            <div className="block px-4 py-2 text-xs text-gray-100 hover:bg-gray-700 " role="menuitem">
                                                CSR (Client-Side Rendering)
                                            </div>
                                        </Link>
                                        <Link href="/ssr">
                                            <div className="block px-4 py-2 text-xs text-gray-100 hover:bg-gray-700" role="menuitem">
                                                SSR (Server-Side Rendering)
                                            </div>
                                        </Link>
                                        <Link href="/ssg">
                                            <div className="block px-4 py-2 text-xs text-gray-100 hover:bg-gray-700" role="menuitem">
                                                SSG (Static Site Generation)
                                            </div>
                                        </Link>
                                        <Link href="/isr">
                                            <div className="block px-4 py-2 text-xs text-gray-100 hover:bg-gray-700 w-full" role="menuitem">
                                                ISR (Incremental Static Regeneration)
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
