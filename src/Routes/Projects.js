import NavBar from "../Components/Nav-Bar/NavBar";
import Hero from "../Components/Hero-Section/Hero";
import ProjectPage from "../Assets/ProjectPage.jpg"
import Footer from "../Components/Footer-Section/Footer";

function Project(){
    return (
        <>
        <NavBar />
        <Hero
        cName="hero-proj c-special"
        heroImage={ProjectPage}
        title="Our Endeavours"
        text=""
        btnClass="hide"
        />
        <Footer/>
        </>
    );
    
}
export default Project;