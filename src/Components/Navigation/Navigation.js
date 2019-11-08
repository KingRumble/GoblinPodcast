import React from 'react';
import './navigationStyle.css';
const Navigation = (props) =>{
	

		return(
			<div>
				<nav id="navbar-container">
					<div id="website-title">
						<p id="title">Goblin Den</p>
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