import React from 'react';
import './PostStyle.css';

class Post extends React.Component{






	render(){
		return(
			<div id="post-container">
				<div id="top-post-section">
					<div id="picture-container">
						<img src='./dog1.jpg' />
					</div>
					<div id="post-heading">
						<h5>Message Type</h5>
						<h4>Title</h4>
					</div>
				</div>
				<div id="description-box">
					<p>Description</p>
				</div>
				<div id="date-box">
					<p>Created:11/07/2019</p>
				</div> 
			</div>
		);
	}
}
export default Post;