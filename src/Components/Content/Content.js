import React from 'react'
import "./ContentStyle.css"

const Content = () =>
{
	return(
		<div id="content-container">
			<div className="content-item">
				<h2 className="about-title">About the Project</h2>
				<p>This is my first ever project that I developed and deployed by myself. To create this SPA I used React and I handled routing with React Router
				My favorite part about this project was using React to create reusable components and the hardest part of this project was keeping all of the files and commits organized.
				I hope you enjoy it.
				</p>
			</div>
			<div className="content-item">
				<h2 className="about-title">Dedications</h2>
				<p>I'd like to dedicate this project to the goblins. I'd like to thank them for the inspiration for this project. Here's hoping that the name continues to live on forever.</p>
			</div>
		</div>
	);
}
export default Content;