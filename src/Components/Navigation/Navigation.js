import React from 'react';
import './navigationStyle.css';
class Navigation extends React.Component{
	render(){
		return(
			<div>
				<nav id="navbar">
					<p id="title"> Welcome to the Goblin Podcast</p>
					<ul>
						<li>Home</li>
						<li>Podcast</li>
						<li>News</li>
					</ul>
				</nav>
			</div>
		);
	}
}
export default Navigation;