import React from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Navigation />
			<About />
			<Experience />
			<Skills />
			<Education />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
