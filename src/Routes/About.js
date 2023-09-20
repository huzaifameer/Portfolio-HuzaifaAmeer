import NavBar from "../Components/Nav-Bar/NavBar";
import Hero from "../Components/Hero-Section/Hero";
import HeroPagePic from "../Assets/AboutPage.jpg"
import Footer from "../Components/Footer-Section/Footer";
import Education from "../Components/Education-Section/Education";

function About(){
    return (
        <>
        <NavBar />
        <Hero
            cName="hero"
            heroImage={HeroPagePic}
            title="Get to know about Huzaifa"
            text="Dream big, cause dreams do happen."
            url="https://github.com/huzaifameer"
            btnClass="hide" />
            <Education/>
            <Footer/>
        </>
    );
    
}
export default About;