import "./Footer-styles.css"
import footerImage from "./SollydZ.png";
import huzaifaPic from "./HuzaifaAmeer.png"

function Footer(){
    return(
        <>
        <div className="parent-box">
            <div className="child-box box-sp">
                <div className="box-1-top">
                    <img src={footerImage}></img>
                </div>
                <div className="box-1-bottom">
                    <p>It always seems impossible until it's done.</p>
                </div>
            </div>
            <div className="child-box">
                <h3>Contact</h3>
                <p><a href="./Contact">huzaifaameer00@gmail.com</a></p>
                <p><i class="fa-brands fa-square-whatsapp"></i> Whatsapp : 0774322222</p><br/>
            </div>
            <div className="child-box">
            <h4>Follow On</h4>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-github"></i></a>
            </div>
            <div className="child-box">
                <img src={huzaifaPic} alt="Huzaifa"></img>
            </div>
        </div>
        </>
    );
}
export default Footer;