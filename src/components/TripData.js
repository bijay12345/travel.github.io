import "./trip.css";
import React,{Component} from "react";



function TripData(props){
	return (

		<div className="t-card">
			<div className="t-image">
				<img alt="trip-img" src={props.image}/>
			</div>
			<h4>{props.heading}</h4>
			<p>{props.text}</p>
		</div>
		)
}

export default TripData;