import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from './images/logo.png';
import resume from './Data/SanthoshBCV.pdf'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img className="logo" src= {logo} alt="logo" />
 			<nav ref={navRef}>
				<a href="#About">About</a>
				<a href="#Skills">Skills</a>
				<a href="#Projects">Projects</a>
				<a href="#Education">Education</a>
				<a href="#Contact">Contact</a>
				<button className="cv-btn"><a href={resume} download="SanthoshBCV.pdf">Resume</a></button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;