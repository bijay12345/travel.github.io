import React from "react";
import "./hero.css"


function Hero(props){
	return (
		<>
			<div className={props.cName}>
			 <img alt="heroImg" src={props.img}/>
			 <div className="hero-text">
				 <h1>{props.title}</h1>
				 <p>{props.text}</p>
				 <a className={props.btnClass} href={props.url}>{props.btnName}</a>	
			 </div>
			</div>
		</>
		)
}

export default Hero;