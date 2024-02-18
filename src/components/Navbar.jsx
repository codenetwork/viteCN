import { useEffect, useState } from "react";
import Link from "./Link";
import { Close, Menu } from "@mui/icons-material";
import { height } from "@mui/system";
import { ButtonBase } from "@mui/material";

// #TODO fix background blur on socials drop down section

// Welcome next developer. This is the navbar. How does it work you may ask. Well I dont know. what did I create? I don't know.

export default function Navbar() {
  const [dropdownActive, setdropdownActive] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleMouseEnter = () => {
    setdropdownActive(true);
  };
  const handleMouseLeave = () => {
    setdropdownActive(false);
  };

  const handleClick = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setNavOpen(false)
    })
  }, [])

  return (
    <>
      <nav
        class={
          "md:max-h-[13vh] md:static grid grid-cols-1 grid-rows-1 max-w-screen-xl mx-auto" + " " + (navOpen ? "absolute h-screen" : "")
        }>
        <div class={"w-full h-fit text-white p-6 px-16 text-right flex flex-row" + " " + (navOpen ? "hidden" : "md:hidden")}>
          <a class="grid grid-cols-1 grid-rows-1  w-fit hover:scale-105 transition" href="/">
            <img class="mx-auto max-w-[50%] " src="/logo.png" alt="" />
          </a>
          <ButtonBase onClick={handleClick}><Menu sx={{placeSelf:'center'}}/></ButtonBase>
        </div>  
        <div
          class={
            "md:flex flex-col md:flex-row gap-12 md:gap-8 text-white justify-center px-10 md:px-0 py-6" +
            " " +
            (navOpen ? "grid grid-cols-1 text-center items-start content-start bg-dark" : "hidden")
          }>
          <a class="grid grid-cols-1 grid-rows-1 w-fit hover:scale-105 transition" href="/">
            <img class="mx-auto max-w-[50%] md:h-full md:max-w-full" src="/logo.png" alt="" />
          </a>
          <a class="self-center hover:text-primary hover:scale-110 transition" href="/about">
            About us
          </a>
          <div class="relative hover:scale-110 transition self-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a class="hover:text-primary">Socials</a>
            <div class="absolute top-5 left-1/2 -translate-x-1/2 backdrop-blur-sm">
              <div
                class={`social-dropdown-menu flex flex-col gap-2 mt-4 rounded-lg text-center items-center bg-[rgba(15,15,15,0.9)] px-6 py-4 backdrop-blur-md  ${
                  dropdownActive ? "" : "hidden"
                }`}>
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
          <a class="self-center hover:text-primary hover:scale-110 transition" href="/rules">
            Rules
          </a>
          <div class="md:hidden grid items-center">
            <ButtonBase sx={{display:"block"}} onClick={handleClick}><Close/></ButtonBase>
          </div>
        </div>
      </nav>
    </>
  );
}
