import "./destination.css";
import React from "react";
import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";


function Destination(){
	return (
		<div className="destination">
			<h1>Popular Destination</h1>
			<p>Tours give the opportunity to explore the world a bit more.</p>
			
			<DestinationData 
				className="first-des"
				heading="Best Iconic: Taj Mahal"
				text="A part of India's popular Golden Triangle tourist circuit, Agra is best known for the Taj Mahal. Enough said really. It's India's most iconic monument and one of the top historical attractions. For that reason, it's impossible to leave it off the list. (While you're there, why not get off the beaten track and visit some attractions around Agra as well?). Make sure you read this comprehensive guide to Agra and the Taj Mahal before you go."
				img1={Mountain1}
				img2={Mountain2}
			/>

			<DestinationData 
				className="first-des-reverse"
				heading="Great Himalaya Range"
				text="In India, the Himalaya mountain range is geographically split into the Great Himalaya, Middle Himalaya and Outer Himalaya ranges. The Great Himalaya is the highest zone, with perpetually snow-covered peaks rising more than 22,000 feet above sea level. It stretches for over 1,200 miles along India's northern border, all the way from Jammu and Kashmir in the West (where it's bounded by the Indus River) to Arunachal Pradesh in the East. The section in Sikkim has the loftiest peaks, with Mount Kanchenjunga being the third highest peak in the world at 28,169 feet above sea level."
				img1={Mountain3}
				img2={Mountain4}
			/>

		</div>
		);
}

export default Destination;