import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NightImage from "../assets/9.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";


function Service(){
	return (
		<>
			<Header />
			<Hero 
				cName="heroMid"
				img={NightImage} 
				title="Services"
				btnClass="hide"
			/>
			<Trip />
			<Footer />
		</>
		)
}


export default Service;