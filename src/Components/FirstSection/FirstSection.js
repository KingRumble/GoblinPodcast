import React from 'react';
import Navigation from "../Navigation/Navigation";
import Title from "../Title/Title"
import "./FirstSectionStyle.css";

const FirstSection = () =>{
return(
	<div id="section-container">	
		<div id="section-one">
			<Navigation />
			<Title />
		</div>
	</div>
	)
}

export default FirstSection;