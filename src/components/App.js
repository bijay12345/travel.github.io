import React from "react";
import Header from "./Header";
import Home from "../routes/Home";
import About from "../routes/About";
import Contact from "../routes/Contact";
import Service from "../routes/Service";
import {Route,Routes} from "react-router-dom";


function App(){
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/contact" element={<Contact />}/>
				<Route path="/service" element={<Service />}/>
			</Routes>
		</div>	
		)
}

export default App;