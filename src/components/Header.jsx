import { useEffect, useState } from "react";
import Navbar from "./Navbar";

import { IconButton, MenuItem } from "@mui/material";
import { Menu } from "@mui/icons-material";

// #TODO Fix flickering of header when scrolling (white flash)

export default function Header() {
  const base = "top-0 z-20 sticky"
  const top = "bg-[rgba(20,20,20,1)]"
  const floating = "shadow-xl bg-[rgba(12,12,12,0.8)] backdrop-blur-sm"

  const [classes, setClasses] = useState(base +" "+top)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 180) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    scroll ? setClasses(base + " " + floating) : setClasses(base + " " + top)
  }, [scroll])

  return (
    <header class={classes} >
      <Navbar />
    </header>
  );
}
