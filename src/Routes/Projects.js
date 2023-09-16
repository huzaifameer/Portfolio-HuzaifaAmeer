import NavBar from "../Components/Nav-Bar/NavBar";
import Hero from "../Components/Hero-Section/Hero";
import ProjectPagePic from "../Assets/ProjectPage.jpg"

function Project(){
    return (
        <>
        <NavBar />
        <Hero
        cName="hero-proj"
        heroImage={ProjectPagePic}
        title="Our endeavours"
        text=""
        btnClass="hide"
        />
        </>
    );
    
}
export default Project;