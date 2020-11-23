import React from "react";
import InfoSection from "../components/InfoSection";
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar";
import Services from "../components/Services"
import Footer from "../components/Footer";
import {homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data";

const Home = () => {
	return (
		<div>

			<Navbar />
			<HeroSection />
			<InfoSection {...homeObjOne}/>
			<InfoSection {...homeObjTwo}/>
			<Services />
			<InfoSection {...homeObjThree}/>
			<Footer />
		</div>
	)
}

export default Home;