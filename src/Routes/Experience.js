import NavBar from "../Components/Nav-Bar/NavBar";
import Hero from "../Components/Hero-Section/Hero";
import ExperiencePagePic from "../Assets/ExperiancePage.jpg"

function Experience(){
    return (
        <>
        <NavBar />
        <Hero
            cName="hero-mid"
            heroImage={ExperiencePagePic}
            btnClass="hide" />
        </>
    );
    
}
export default Experience;