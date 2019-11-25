import React from 'react';
//import Navigation from '../Navigation/Navigation';
import './titleStyle.css'
import Episode from "../Episode/Episode";

	
const Title = (props) =>{

	return(
		<>
			<div id="title-container">
				<div id="goblin-podcast">
					<div id="title-item">
						<h3>The Goblin Podcast: </h3>
						<br/>
						<p>Home to all things filthy, vile and just plain gross</p>
					</div>
					<div id="episode-list">
						<p id="episode-list-title">Episodes:</p>
					</div>
					<div id="episodes">
						<Episode />
						<Episode />
						<Episode />
					</div>
				</div>
			</div>
		</>
	);
}
export default Title;