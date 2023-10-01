"use client"
import Link from "next/link";
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Button from "../button/button";

const Navbar = () => {
    const [open, setopen] = useState(null);

    return (
        <>

            <div>

                <header>

                    <div className="xl:mx-auto xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] flex py-5 justify-between text-[14px] font-semibold select-none transition-all ease-linear duration-650">

                        <Link href="/" class="flex items-center lg:hidden">

                            <div className='p-1 bg-[#D6E5FD] rounded-md rotate-45'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5Z" fill="#2D76F9" />
                                    <path opacity="0.5" d="M1.5 9C1.5 10.4834 1.93987 11.9334 2.76398 13.1668C3.58809 14.4001 4.75943 15.3614 6.12987 15.9291C7.50032 16.4968 9.00832 16.6453 10.4632 16.3559C11.918 16.0665 13.2544 15.3522 14.3033 14.3033C15.3522 13.2544 16.0665 11.918 16.3559 10.4632C16.6453 9.00832 16.4968 7.50032 15.9291 6.12987C15.3614 4.75943 14.4001 3.58809 13.1668 2.76398C11.9334 1.93987 10.4834 1.5 9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9ZM8.25 5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25Z" fill="#2D76F9" />
                                </svg>
                            </div>

                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ms-4">Remind<span className='text-[#2D76F9]'>me</span></span>
                        </Link>

                        <span className={`cursor-pointer lg:hidden block transition-all ease-in duration-500 text-2xl border border-[#2D76F9] p-1 rounded-lg text-[#2D76F9] hover:text-white hover:bg-[#2D76F9] `}
                            onClick={() => setopen(!open)} >
                            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </span>

                        <ul className={`block absolute px-[1.5rem] md:px-[3rem] lg:flex align-right lg:items-center !z-[100] transition-all ease-in duration-500 w-[100%] left-0 top-0 lg:w-auto lg:z-auto lg:static  lg:bg-none  lg:space-x-20 space-y-2.5 lg:space-y-0 my-auto opacity-100 p-3 lg:p-0   
                            ${open ? " top-[63px] opacity-100 h-[100vh] lg:h-0 lg:bg-transparent bg-white space-y-10"
                                : " top-[-300px] opacity-0"}`}>

                            <li className="hidden lg:inline-block">

                                <Link href="/" class="flex items-center">

                                    <div className='p-1 bg-[#D6E5FD] rounded-md rotate-45'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5Z" fill="#2D76F9" />
                                            <path opacity="0.5" d="M1.5 9C1.5 10.4834 1.93987 11.9334 2.76398 13.1668C3.58809 14.4001 4.75943 15.3614 6.12987 15.9291C7.50032 16.4968 9.00832 16.6453 10.4632 16.3559C11.918 16.0665 13.2544 15.3522 14.3033 14.3033C15.3522 13.2544 16.0665 11.918 16.3559 10.4632C16.6453 9.00832 16.4968 7.50032 15.9291 6.12987C15.3614 4.75943 14.4001 3.58809 13.1668 2.76398C11.9334 1.93987 10.4834 1.5 9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9ZM8.25 5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25Z" fill="#2D76F9" />
                                        </svg>
                                    </div>

                                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ms-4">Remind<span className='text-[#2D76F9]'>me</span></span>
                                </Link>

                            </li>

                            <li className="hover:text-[#2D76F9]">
                                <Link href="/">Home</Link>
                            </li>

                            <li className="hover:text-[#2D76F9]">
                                <Link href="#features" to="">Features</Link>
                            </li>

                            <li className="hover:text-[#2D76F9]">
                                <Link href="#download">About us</Link>
                            </li>

                            <li className="lg:hidden">
                                <Button
                                    btnTitle="About App"
                                    btnClass="bg-transparent px-8 py-2 rounded-full text-sm text-[#2D76F9] hover:bg-[#2D76F9] hover:text-white border border-[#2D76F9] inline-block transition all ease"
                                />
                            </li>

                        </ul>

                        <div className="hidden lg:inline-block">
                            <Button
                                btnTitle="About App"
                                btnClass="bg-transparent px-8 py-2 rounded-full text-sm text-[#2D76F9] hover:bg-[#2D76F9] hover:text-white border border-[#2D76F9] inline-block transition all ease"
                            />
                        </div>

                    </div>

                </header >

            </div >




            {/* <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full">
                <div class="max-w-full flex flex-row justify-around mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <div className='p-1 bg-[#D6E5FD] rounded-md rotate-45'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 18 18" fill="none">
                                <path d="M9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5Z" fill="#2D76F9" />
                                <path opacity="0.5" d="M1.5 9C1.5 10.4834 1.93987 11.9334 2.76398 13.1668C3.58809 14.4001 4.75943 15.3614 6.12987 15.9291C7.50032 16.4968 9.00832 16.6453 10.4632 16.3559C11.918 16.0665 13.2544 15.3522 14.3033 14.3033C15.3522 13.2544 16.0665 11.918 16.3559 10.4632C16.6453 9.00832 16.4968 7.50032 15.9291 6.12987C15.3614 4.75943 14.4001 3.58809 13.1668 2.76398C11.9334 1.93987 10.4834 1.5 9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9ZM8.25 5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25Z" fill="#2D76F9" />
                            </svg>
                        </div>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ms-3">Remind<span className='text-[#2D76F9]'>me</span></span>
                    </a>
                    <div class="flex md:order-2 justify-end">
                        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <button type="button" class="hidden md:inline text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    </div>
                    <div class="items-start hidden w-full md:flex md:w-auto md:order-1 md:ms-12" id="navbar-cta">
                        <ul class="flex flex-col p-4 md:p-0 font-semibold mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#2D76F9] md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About us  </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </>
    )
}
export default Navbar