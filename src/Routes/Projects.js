import NavBar from "../Components/Nav-Bar/NavBar";
import Hero from "../Components/Hero-Section/Hero";
import ProjectPage from "../Assets/ProjectPage.jpg"
import Footer from "../Components/Footer-Section/Footer";
import Content from "../Components/project-content/Content";

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
        <Content/>
        <Footer/>
        </>
    );
    
}
export default Project;