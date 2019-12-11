import React from 'react';
import './navigationStyle.css';
import {Link} from 'react-router-dom';
class Navigation extends React.Component{
	GoblinQuotes=[
		"Yeah! We're the goblins",
		"I just do drugs",
		"Yeah, they're gonna milk me",
		"Yeah, Red Rocket has cruise control but I don't trust it",
		"I swear to god there will be no boinking in the basement",
		"You know maybe I don't want to be the trashman",
		"No way! Are you guys eating tide detergent packs without me",
		"We gunna live by Lil' Pump Sharia law",
		"The Swedish Fish is no more",
		"I'm a tingle virgin",
		"Sky is Japan",
		"You know you're high when you smoke too much",
		"Can we all agree that the Sonic movie is going to suck",
		"Take it back Shia Labeouf is a transformer",
		"It's just like a video game brother ",
		"Rhiles, Give me that nail",
		"So, Am I supposed to eat you out now?",
		"Homis",
		"Yes I did get a boner"
	]	
	state={
			//int: 0,
			quote: this.GoblinQuotes[0]
			
		}
	 	GoblinIndexHandler = () =>{
		console.log("Goblin Index Handler has been called")
		let index=Math.floor(Math.random()*20)
		setTimeout(()=>{
			this.setState(
					{
						//int: index,
						quote: this.GoblinQuotes[index]
					}
				)
			console.log(this.state.int)
			console.log("I've returned the following output: " + this.GoblinQuotes[this.state.int])
			 //return this.GoblinQuotes[this.state.int];
			 //return this.state.int;
		},10000)
	}
		GoblinPrinter  = () =>{
		setTimeout(()=>this.GoblinIndexHandler,10000)
		this.setState({isRunning:true})
		}
	    

	 	
		render(){
			this.GoblinIndexHandler();
		return(
			<div>
				<nav id="navbar-container">
					<div id="website-title">
						<div id="website-title-1">
							<h1 id="title">Goblin Den</h1>
						</div>
						<div id="merry-christmas">
							<h2 style={{backgroundColor:"black", color:"white", marginTop: "0px", height: "25%"}}>
								Merry Christmas! Matthew :)</h2>
							<h3 id="title-2" style={{letterSpacing: "1px", fontSize: "25px", marginBottom:"0px"}}
							>Quotes:   {this.state.quote}</h3>
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
}
export default Navigation;