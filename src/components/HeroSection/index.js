import React, {useState} from "react";
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,
		HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from "./HeroElements";
import Video from "../../Videos/Video.mp4";
import {Button} from "../ButtonElements";

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	}
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
			<HeroH1>React Style Components</HeroH1>
			<HeroP>Using React Style Components To Learn React If You Want To Check Services Please Use Full Screen Mode.</HeroP>
			<HeroBtnWrapper>
				<Button 
				onMouseEnter={onHover}
				onMouseLeave={onHover}
				to="signup"
				primary="true"
				dark="true"
				>
				Get Started {hover ? <ArrowForward /> : <ArrowRight />}
				</Button>
			</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection;