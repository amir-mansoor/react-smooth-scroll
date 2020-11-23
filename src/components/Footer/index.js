import React from "react";
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWraper, FooterLinkItems,
		FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from "./FooterElements";
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from "react-icons/fa";
import {animateScroll as scroll } from "react-scroll";
const Footer = () => {

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	return(
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWraper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
								<FooterLink to="/">How It Works</FooterLink>
								<FooterLink to="/">Testimonials</FooterLink>
								<FooterLink to="/">Careers</FooterLink>
								<FooterLink to="/">Investors</FooterLink>
								<FooterLink to="/">Terms Of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
								<FooterLink to="/">Submit Video</FooterLink>
								<FooterLink to="/">Ambassadors</FooterLink>
								<FooterLink to="/">Agency</FooterLink>
								<FooterLink to="/">Influencer</FooterLink>
						</FooterLinkItems>
					</FooterLinksWraper>
					<FooterLinksWraper>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
								<FooterLink to="/">Contact</FooterLink>
								<FooterLink to="/">Support</FooterLink>
								<FooterLink to="/">Destinations</FooterLink>
								<FooterLink to="/">Sponsorships</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
								<FooterLink to="/">Instagram</FooterLink>
								<FooterLink to="/">Facebook</FooterLink>
								<FooterLink to="/">Youtube</FooterLink>
								<FooterLink to="/">Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWraper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo onClick={toggleHome} to="/">Dolla</SocialLogo>
						<WebsiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="YouTube"><FaYoutube/></SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer;