import React from 'react';
import Navigation from "../Navigation/Navigation";
import Title from "../Title/Title"
import "./FirstSectionStyle.css";

const FirstSection = (props) =>{
return(
	<div id="section-container">	
		<div id="section-one">
			<Navigation click={props.click} />
			<Title title={props.title} />
		</div>
	</div>
	)
}

export default FirstSection;