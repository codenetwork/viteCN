import { useState } from "react";
import SocialDropdown from "../component/SocialDropdown";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdownActive, setdropdownActive] = useState(false);

  function handleNavToggle() {
    setIsNavOpen(!isNavOpen);
  }

  const handleMouseEnter = () => {
    setdropdownActive(true);
  };
  const handleMouseLeave = () => {
    setdropdownActive(false);
  };

  return (
    // <nav className="flex flex-row max-w-screen-lg mx-auto items-center justify-center gap-3 text-white py-6">
    //   <a href="/" className="">
    //     <img src="/logo.png" alt="Code Network Logo" class="max-h-12 mx-3" />
    //   </a>
    //   <a href="/">About Us</a>
    //   <a href="/">Socials</a>
    //   <a href="/">Rules</a>
    // </nav>
    <>
      <nav class="shadow-xl bg-[rgba(12,12,12,0.8)] backdrop-blur-sm fixed w-full z-20 top-0 start-0">
        <div class={`max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-5`}>
          <div class="grid grid-cols-[1fr_max-content] w-full items-center justify-items-center">
            <div class="translate-x-[20px]">
              <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
                <img src="./logo.png" class="h-10 scale-105" alt="Code Network Logo" />
              </a>
            </div>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={handleNavToggle}
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-green-600 hover:text-white "
                aria-controls="navbar-sticky"
                aria-expanded="false">
                {!isNavOpen ? (
                  <>
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white" >
                      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
          <div class={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isNavOpen ? "" : "hidden"}`} id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 md:items-center text-center text-xl md:text-base font-medium text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li class="py-4 md:py-2 hidden md:flex">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src="./logo.png" class="h-10 scale-105" alt="Code Network Logo" />
                </a>
              </li>
              <li class="p-4 md:p-0">
                <a class="self-center hover:text-primary transition p-4 md:p-0" href="/about">
                  About us
                </a>
              </li>
              <li className="relative p-4 md:p-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a class="hover:text-primary p-4 md:p-0">Socials</a>
                <div class="absolute top-5 left-1/2 -translate-x-1/2  w-full md:w-max">
                  <div
                    class={`social-dropdown-menu flex flex-col gap-2 mt-4 rounded-lg text-center items-center bg-[rgba(15,15,15,0.9)] px-6 py-4 backdrop-blur-md  ${
                      dropdownActive ? "" : "hidden"
                    }`}>
                    <a class="text-lg" href="https://www.instagram.com/codenetwork_/" target="_blank">
                      Instagram
                    </a>
                    <a class="text-lg" href="https://discord.gg/scXBk2j4uE" target="_blank">
                      Discord
                    </a>
                    <a class="text-lg" href="https://www.facebook.com/CodeNetwork" target="_blank">
                      Facebook
                    </a>
                    <a class="text-lg" href="https://www.linkedin.com/company/codenetwork/" target="_blank">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </li>
              <li class="p-4 md:p-0">
                <a class="self-center hover:text-primary transition p-4 md:p-0" href="/rules">
                  Rules
                </a>
              </li>
            </ul>
            <div class={`h-screen overflow-y-none bg-transparent ${isNavOpen ? "" : "hidden"}`}></div>
          </div>
        </div>
      </nav>
    </>
  );
}
