import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import NightImage from "../assets/1.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";




function Home(){
	return (
		<>
			<Header />

			<Hero 
				cName="hero"
				img={NightImage}
				title="Your Journey Starts here."
				text="Choose Your Favourite destination"
				url="/"
				btnName="Travel Plan"
				btnClass="show"
			/>
			<Destination />
			<Trip />
			<Footer />
		</>
		)
}

export default Home;