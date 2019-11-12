import React from 'react';
import Navigation from "../Navigation/Navigation";
import Title from "../Title/Title"
import "./FirstSectionStyle.css";
import Footer from "../Footer/Footer"

const FirstSection = (props) =>{
return(
	<div id="section-container">	
		<div id="section-one">
			<Navigation click={props.click} />
			<Title title={props.title} />
			<Footer />
		</div>
	</div>
	)
}

export default FirstSection;