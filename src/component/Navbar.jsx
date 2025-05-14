import React, { useRef, useEffect, useState } from "react";
import codeNetworkLogo from "../assets/codeNetworkLogoClear.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import SocialDropdown from "./SocialDropdown";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className={`edges2 ${isScrolled ? "scrolled" : ""}`}>
        <h3>
          <Link to="/">
            <img src={codeNetworkLogo} alt="Logo of Code Network" height={60} />
          </Link>
        </h3>
        <nav ref={navRef}>
          <Link to="/about">About us</Link>
          <div className="dropdown">
            <div className="dropdown-content">
              <SocialDropdown />
            </div>
          </div>
          <Link to="/rules">Rules</Link>
          <Link to="/projects">Projects</Link>
          {/* <Link to="/competition">Design Competition</Link> */}
          <Link to="/sgm">Special General Meeting</Link>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
