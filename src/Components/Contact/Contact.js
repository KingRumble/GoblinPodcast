import React from 'react';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./ContactStyles.css";

const Contact = () =>{
	return(
		<>
			<Navigation />
			<div id="contact-content">
				<div id="headline">
					<h2>Interested in leaving a comment or suggestion?</h2>
					<p>Type it in the box below and then hit the <strong>trashcan</strong> icon to send it</p>
				</div>
				<form>
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" />
					<br/>
					<br/>
					<label htmlFor="Email">Email:</label>
					<input type="Email" name="Email" />
					<br/>
					<br/>
					<label htmlFor="Message">Message:</label>
					<textarea rows="4" cols="50" name="Message">
					
					</textarea>
				</form>
			</div>
			<Footer />
		</> 
	)
}
export default Contact;