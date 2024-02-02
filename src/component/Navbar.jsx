// import { useRef } from "react";
// import codeNetworkLogo from "../assets/codeNetworkLogoClear.png";
// import { FaBars, FaTimes } from "react-icons/fa";
// // import "./Navbar.css";
// import SocialDropdown from "./SocialDropdown";

// function Navbar()
// {
//   const navRef = useRef();

//   const showNavbar = () =>
//   {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   return (
//     <header>
//       <div className='edges2'>
//         <h3>
//           <a href="/"><img src={codeNetworkLogo} alt="Logo of Code Network" height={60} /></a>
//         </h3>
//         <nav ref={navRef}>
//           <a href="/about">About us</a>
//           <div className="dropdown">
//             <div className="dropdown-content">
//               <SocialDropdown />
//             </div>
//           </div>
//           <a href="/rules">Rules</a>

//           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <FaTimes />
//           </button>
//         </nav>
//         <button className="nav-btn" onClick={showNavbar}>
//           <FaBars />
//         </button>

//       </div>

//     </header>
//   );
// }

// export default Navbar;
