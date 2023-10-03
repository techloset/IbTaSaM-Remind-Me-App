import Link from "next/link";
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="xl:max-w-[1440px] px-[1.5rem] md:px-[3rem] lg:px-[6rem] mx-auto w-full my-16">
      <div className="grid md:grid-cols-3">
        <div>
          <Link href="/" class="flex items-center">
            <div className="p-2 bg-[#D6E5FD] rounded-md rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
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

            <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white ms-6">
              Remind<span className="text-[#2D76F9]">me</span>
            </span>
          </Link>

          <p className="text-[#747474] md:text-md sm:pe-80 md:pe-24 pt-4 md:pt-10 leading-[170%]">
            Task deadlines and scheduling applications with various benefits and
            advantages
          </p>
        </div>

        <div className="mt-5 md:mt-3">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-semibold text-xl">Sitemaps</h3>

              <ul className="pt-4 md:pt-10">
                <li className="cursor-pointer text-[#747474] text-sm sm:text-md hover:text-[#2D76F9] font-semibold transition-all ease-in delay-150">
                  <Link href="/">
                    <span className="text-[#2D76F9] text-xl">• </span> Home
                  </Link>
                </li>

                <li className="cursor-pointer text-[#747474] text-sm sm:text-md hover:text-[#2D76F9] font-semibold transition-all ease-in delay-150">
                  <Link href="#features">
                    <span className="text-[#2D76F9] text-xl">• </span> Feature
                  </Link>
                </li>

                <li className="cursor-pointer text-[#747474] text-sm sm:text-md hover:text-[#2D76F9] font-semibold transition-all ease-in delay-150">
                  <Link href="#download">
                    <span className="text-[#2D76F9] text-xl">• </span> About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Advantages</h3>

              <ul className="pt-4 md:pt-10">
                <li className="cursor-pointer text-[#747474] text-sm sm:text-md hover:text-[#2D76F9] font-semibold transition-all ease-in delay-150">
                  <Link href="">
                    <span className="text-[#2D76F9] text-xl">• </span> Set Task
                    Better
                  </Link>
                </li>

                <li className="cursor-pointer text-[#747474] text-sm sm:text-md hover:text-[#2D76F9] font-semibold transition-all ease-in delay-150">
                  <Link href="">
                    <span className="text-[#2D76F9] text-xl">• </span> Easy
                    Manage
                  </Link>
                </li>

                <li className="cursor-pointer text-[#747474] text-sm sm:text-md hover:text-[#2D76F9] font-semibold transition-all ease-in delay-150">
                  <Link href="">
                    <span className="text-[#2D76F9] text-xl">• </span> Get
                    Notification
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-3">
          <div>
            <h3 className="font-semibold text-xl">Follow Us</h3>
          </div>

          <div className="flex text-3xl pt-4 md:pt-10">
            <Link href="https://www.facebook.com/" target="_blank">
              <BiLogoFacebook className="text-[#2D76F9] hover:text-[#747474] cursor-pointer" />
            </Link>
            <Link href="https://twitter.com/" target="_blank">
              <BiLogoTwitter className="mx-6 text-[#2D76F9] hover:text-[#747474] cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <BiLogoLinkedin className="text-[#2D76F9] hover:text-[#747474] cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
