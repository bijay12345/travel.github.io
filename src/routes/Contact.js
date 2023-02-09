import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NightImage from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


function Contact(){
	return (
		<>
			<Header />
			<Hero 
				cName="heroMid"
				img={NightImage} 
				title="Contact Us"
				btnClass="hide"
			/>
			<ContactForm />
			<Footer />
		</>
		)
}


export default Contact;