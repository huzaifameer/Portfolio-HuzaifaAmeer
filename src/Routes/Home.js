import NavBar from "../Components/Nav-Bar/NavBar";
import Hero from "../Components/Hero-Section/Hero";
import HomePagePic from "../Assets/Home.jpg"

function Home(){
    return (
        <>
        <NavBar />
        <Hero
            cName="hero"
            heroImage={HomePagePic}
            title="Begin your journey With Us"
            text="Providing a better service for you"
            buttonText="Official GitHub "
            btnClass="hide"
             />
        </>
    );
    
}
export default Home;