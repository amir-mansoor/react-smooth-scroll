import React from "react";
import {Nav, NavbarContainer, NavLogo, MobileIcon,
 NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./NavbarElements";
import {FaBars} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";
 
const Navbar = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	}
	return (
		<div>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/" onClick={toggleHome}>Dolla</NavLogo>
					<MobileIcon>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks 
							to="about"
							smooth={true}
							duration={500} 
							spy={true}
							offset={0}>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks smooth={true}
							duration={500} 
							spy={true}
							offset={0} to="discover">Discover</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks smooth={true}
							duration={500} 
							spy={true}
							offset={0} to="services">Services</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks smooth={true}
							duration={500} 
							spy={true}
							offset={0} to="signup">Sign Up</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
					<NavBtnLink to="/signin">Sign In</NavBtnLink>	
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</div>
	)
}

export default Navbar;