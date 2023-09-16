import NavBar from "../Components/Nav-Bar/NavBar";
import Hero from "../Components/Hero-Section/Hero";
import HeroPagePic from "../Assets/AboutPage.jpg"

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
        </>
    );
    
}
export default About;