import { IconButton, MenuItem } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import Link from "./Link";

// #TODO fix background blur on socials drop down section

export default function Navbar() {
  const [dropdownActive, setdropdownActive] = useState(false);
  const handleMouseEnter = () => {
    setdropdownActive(true);
  };
  const handleMouseLeave = () => {
    setdropdownActive(false);
  };

  return (
    <>
      {/* <nav class="absolute md:static w-full md:max-w-screen-xl h-[100vh] md:h-full md:max-h-[12vh] bg-dark md:bg-transparent p-12 md:p-0 text-white flex md:flex-row flex-col gap-8 items-center md:justify-center text-center md:mx-auto"> */}
      <nav class="max-w-screen-xl h-full max-h-[13vh] text-white flex flex-row gap-8 justify-center items-center text-center mx-auto">
        <a class="w-full md:w-max h-fit md:h-full mx-0" href="/">
          <img class="w-5/6 md:w-max h-full mx-auto py-6 object-contain max-w-[50vw] mr-2 hover:scale-105 transition" src="/logo.png" alt="" />
        </a>
        <a class="w-max mx-0 hover:text-primary hover:scale-110 transition" href="/about">
          About us
        </a>
        <div class="relative hover:scale-110 transition " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a class="hover:text-primary">Socials</a>
          <div class="absolute top-5 left-1/2 -translate-x-1/2 backdrop-blur-sm">
            <div class={`social-dropdown-menu flex flex-col gap-2 mt-4 rounded-lg text-center items-center bg-[rgba(15,15,15,0.9)] px-6 py-4 backdrop-blur-md  ${dropdownActive ? "" : "hidden"}`}>
              <Link class="text-lg" href="https://www.instagram.com/codenetwork_/" target="_blank">
                Instagram
              </Link>
              <Link class="text-lg" href="https://discord.gg/scXBk2j4uE" target="_blank">
                Discord
              </Link>
              <Link class="text-lg" href="https://www.facebook.com/CodeNetwork" target="_blank">
                Facebook
              </Link>
              <Link class="text-lg" href="https://www.linkedin.com/company/codenetwork/" target="_blank">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <a class="w-max mx-0 hover:text-primary hover:scale-110 transition" href="/rules">
          Rules
        </a>
      </nav>
    </>
  );
}