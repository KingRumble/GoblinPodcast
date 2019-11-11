import React from 'react';
import './navigationStyle.css';
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
						<p>Display News</p>
						<p>|</p>
						<p>Unassigned</p>
						<p>|</p>
						<p>Unassigned</p>
					</div>
				</nav>
			</div>
		);
}
export default Navigation;