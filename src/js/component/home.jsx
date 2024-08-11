import React from "react";
import Card from "./Card.jsx";
import NavBar from "./NavBar.jsx";
import CardTitle from "./CardTitle.jsx";

//create your first component
const Home = () => {
	const imageUrl = "https://www.wallpaperflare.com/static/824/125/246/honda-logo-wallpaper.jpg"

	return (
		<div>
			<NavBar brandName="Start Bootstrap" pageName="Home" lastName="About me" serviceName="Services" contactName="Contact" />
			<CardTitle title="A Warm WELCOME!" content="A warm welcome to this web profile about the prestigious Honda brand. Here we will discuss everything about its projection over the decades and what it brings in the future." button="Call To Action!" />
			<Card image={imageUrl} title="Honda" content="Blue Skies for Our Children" button="Find Out More!" />
		</div>

	);
};

export default Home;
