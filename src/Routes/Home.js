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
        title="Hi Developer !"
        text="Build your dream project with us."
        url="https://github.com/huzaifameer"
        btnClass="hide"
        />
        </>
    );
    
}
export default Home;