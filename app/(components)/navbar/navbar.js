"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "@/app/(components)/button/button";

const Navbar = () => {
  const [open, setopen] = useState(null);
  return (
    <div className="bg-opacity-0 md:sticky top-0 z-10">
      <div className="xl:mx-auto xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] flex py-6 justify-between text-[16px] font-semibold select-none transition-all ease-linear duration-650">
        <Link href="/" class="flex items-center lg:hidden">
          <div className="p-1 bg-_lightBlue rounded-md rotate-45">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5Z"
                fill="#2D76F9"
              />
              <path
                opacity="0.5"
                d="M1.5 9C1.5 10.4834 1.93987 11.9334 2.76398 13.1668C3.58809 14.4001 4.75943 15.3614 6.12987 15.9291C7.50032 16.4968 9.00832 16.6453 10.4632 16.3559C11.918 16.0665 13.2544 15.3522 14.3033 14.3033C15.3522 13.2544 16.0665 11.918 16.3559 10.4632C16.6453 9.00832 16.4968 7.50032 15.9291 6.12987C15.3614 4.75943 14.4001 3.58809 13.1668 2.76398C11.9334 1.93987 10.4834 1.5 9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9ZM8.25 5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25Z"
                fill="#2D76F9"
              />
            </svg>
          </div>

          <span class="self-center text-xl font-semibold whitespace-nowrap ms-4 text-_dark">
            Remind<span className="text-_blue">me</span>
          </span>
        </Link>

        <span
          className={`cursor-pointer lg:hidden block transition-all ease-in duration-500 text-2xl border border-_blue p-1 rounded-lg text-_blue hover:text-_white hover:bg-_blue `}
          onClick={() => setopen(!open)}
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </span>

        <ul
          className={`block absolute px-[1.5rem] md:px-[3rem] lg:flex align-right lg:items-center !z-[100] transition-all ease-in duration-500 w-[100%] left-0 top-0 lg:w-auto lg:z-auto lg:static  lg:bg-none  lg:space-x-20 space-y-2.5 lg:space-y-0 my-auto opacity-100 p-3 lg:p-0   
                            ${
                              open
                                ? " top-[63px] opacity-100 h-[100vh] lg:h-0 lg:bg-transparent bg-_white space-y-10"
                                : " top-[-300px] opacity-0"
                            }`}
        >
          <li className="hidden lg:inline-block">
            <Link href="/" class="flex items-center">
              <div className="p-1 bg-_lightBlue rounded-md rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5Z"
                    fill="#2D76F9"
                  />
                  <path
                    opacity="0.5"
                    d="M1.5 9C1.5 10.4834 1.93987 11.9334 2.76398 13.1668C3.58809 14.4001 4.75943 15.3614 6.12987 15.9291C7.50032 16.4968 9.00832 16.6453 10.4632 16.3559C11.918 16.0665 13.2544 15.3522 14.3033 14.3033C15.3522 13.2544 16.0665 11.918 16.3559 10.4632C16.6453 9.00832 16.4968 7.50032 15.9291 6.12987C15.3614 4.75943 14.4001 3.58809 13.1668 2.76398C11.9334 1.93987 10.4834 1.5 9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9ZM8.25 5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9V5.25Z"
                    fill="#2D76F9"
                  />
                </svg>
              </div>

              <span class="self-center text-xl font-semibold whitespace-nowrap ms-4 text-_dark">
                Remind<span className="text-_blue">me</span>
              </span>
            </Link>
          </li>
          <li className="text-_dark hover:text-_blue">
            <Link href="/">Home</Link>
          </li>
          <li className="text-_dark hover:text-_blue">
            <Link href="#features" to="">
              Features
            </Link>
          </li>
          <li className="text-_dark hover:text-_blue">
            <Link href="#download">About us</Link>
          </li>
          <li className="lg:hidden">
            <Button
              btnTitle="About App"
              btnClass="bg-transparent px-8 py-2 rounded-full text-sm text-_blue hover:bg-_blue hover:text-_white border border-_blue inline-block transition all ease"
            />
          </li>
        </ul>
        <div className="hidden lg:inline-block">
          <Button
            btnTitle="About App"
            btnClass="bg-transparent px-8 py-2 rounded-full text-sm text-_blue hover:bg-_blue hover:text-_white border border-_blue inline-block transition all ease"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
