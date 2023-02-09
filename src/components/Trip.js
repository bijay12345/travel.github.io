import "./trip.css";
import React from "react";
import TripData from "./TripData";
import Trip1 from "../assets/11.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";




function Trip(){
	return (
		<div className="trip">
			<h1>Recent Trips</h1>
			<p>You can discover unique destination using google maps.</p>
			<div className="tripcard">
				<TripData 
					image={Trip1}
					heading="Backpacking Matt"
					text="Backpacking Matt, owned and run by Matt Kyhnn, is a travel blog that has similar vibes with Nomadic Matt. It has a simplistic design, a memorable content tone, and striking travel photos that bring the blog’s stories to life. "
				/>
				<TripData 
					image={Trip2}
					heading="Backpacking Matt"
					text="Backpacking Matt, owned and run by Matt Kyhnn, is a travel blog that has similar vibes with Nomadic Matt. It has a simplistic design, a memorable content tone, and striking travel photos that bring the blog’s stories to life. "
				/>
				<TripData 
					image={Trip3}
					heading="Backpacking Matt"
					text="Backpacking Matt, owned and run by Matt Kyhnn, is a travel blog that has similar vibes with Nomadic Matt. It has a simplistic design, a memorable content tone, and striking travel photos that bring the blog’s stories to life. "
				/>
			</div>
		</div>
		)
}

export default Trip;