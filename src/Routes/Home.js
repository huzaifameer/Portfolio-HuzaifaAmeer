import NavBar from "../Components/Nav-Bar/NavBar";
import Hero from "../Components/Hero-Section/Hero";
import HomePagePic from "../Assets/HomePage.jpg"

function Home(){
    return (
        <>
        <NavBar />
        <Hero
        cName="hero-mid"
        heroImage={HomePagePic}
        title="A Fullstack Developer"
        text="Building day by day."
        url="https://github.com/huzaifameer"
        btnClass="hide"
        />
        </>
    );
    
}
export default Home;