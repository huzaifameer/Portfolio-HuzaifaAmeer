import NavBar from "../Components/Nav-Bar/NavBar";
import "./Contact-Styles.css"

function Contact(){
    return (
        <>
        <NavBar />
        <div >
            <form className="contact-outer" action="https://formspree.io/f/xyyqpppw" method="POST">
                <h1>Contact Us</h1>
                <div className="inputData">
                    <input className="cont-in" type="text" name="first" placeholder="First Name" autoComplete="off" required></input>
                    <input className="cont-in" type="text" name="last" placeholder="Last Name" autoComplete="off" required></input>
                </div>
                <div className="inputData">
                    <input className="cont-in" type="email" name="email" placeholder="Email Address" autoComplete="off" required></input>
                    <input className="cont-in" type="tel" name="telephone" placeholder="Tele No." autoComplete="off" required></input>
                </div>
                <textarea rows={5} cols={60} name="message" placeholder="Type ypur message" autoComplete="off" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div> 
        </>
    );
    
}
export default Contact;