import React from 'react';
import './SecondSectionStyle.css';
import Post from '../Post/Post';

class SecondSection extends React.Component{

	buttonStyle = {
		backgroundColor: 'LightSteelBlue',
		pointer: 'click'
	};


	render(){
		return(
			<div id="section-two-container">
				<div id="section-two-top">
					<h2 id="section-two-title">The Goblin Times</h2>
					<div id="section-two-sections">
						<h4 style={this.buttonStyle}>Podcasts</h4>
						<h4> | </h4>
						<h4 style={this.buttonStyle}>News</h4>
						<h4> | </h4>
						<h4 style={this.buttonStyle}>Misc.</h4>
					</div>
				</div>
				<div id="section-two-body">
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		);
	}
}
export default SecondSection;