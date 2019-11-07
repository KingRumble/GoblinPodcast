import React from 'react';
import SecondSection from '../SecondSection/SecondSection';
import FirstSection from '../FirstSection/FirstSection';
import "./Display.css";

const Display = () =>{
	

	return(
		<div id="display-container">
			<div id="display-items">
				<FirstSection />
				<SecondSection />
			</div>
		</div>
	); 
}
export default Display;