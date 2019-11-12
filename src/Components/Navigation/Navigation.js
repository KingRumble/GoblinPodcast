import React from 'react';
import './navigationStyle.css';
import {Link} from 'react-router-dom';
const Navigation = (props) =>{
	

		return(
			<div>
				<nav id="navbar-container">
					<div id="website-title">
						<div id="website-title-1">
							<h1 id="title">Goblin Den</h1>
						</div>
						<div>
							<h3 id="title-2">"Yeah! We're the Goblins"</h3>
						</div>
					</div>
					<div id="menu-options">
						<p><Link to='/'>Home</Link></p>
						<p>|</p>
						<p><Link to='/about-us'>About Us</Link></p>
						<p>|</p>
						<p><Link to='/contact-us'>Contact Us</Link></p>
					</div>
				</nav>
			</div>
		);
}
export default Navigation;