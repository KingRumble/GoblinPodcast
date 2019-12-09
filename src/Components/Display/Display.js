import React from 'react';
import SecondSection from '../SecondSection/SecondSection';
import FirstSection from '../FirstSection/FirstSection';
import About from '../About/About';
import Contact from '../Contact/Contact';
import "./Display.css";
import {Route} from 'react-router-dom';

class Display extends React.Component{
	state =	{
		"showNews": false,
	}

	hideNewsHandler = () =>{
		if(this.state.showNews){
			return(
				<>
					<FirstSection click={this.clickHandler} title={this.titleHandler} />
					<SecondSection />
				</>
			);
		}else{
			return(
				<FirstSection click={this.clickHandler} title={this.titleHandler} />
			);
		}

	};
	clickHandler = () =>{
		if(!this.state.showNews){
			this.setState({showNews: true});
			console.log("Displaying the News");
		}else{
			this.setState({showNews: false});
			console.log("Fake News! News is now hidden");
		}
	};
	titleHandler = () =>{
		console.log(this.state.showNews);
		return this.state.showNews;
	}; 


	render(){
		return(
			<>
				<Route path="/GoblinWebsite/" exact render={() => <FirstSection />} />
				<Route path="/" exact render={() => <FirstSection />} />
				<Route path="/about-us" exact render={() => <About />} />
				<Route path="/contact-us" exact render={() =><Contact />}/>
			</>
		); 
	}
}
export default Display;