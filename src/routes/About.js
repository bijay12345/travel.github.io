import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NightImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){
	return (
		<>
			<Header />
			<Hero 
				cName="heroMid"
				img={NightImage} 
				title="About Us"
				btnClass="hide"
			/>
			<AboutUs />
			<Footer />
		</>
		)
}


export default About;