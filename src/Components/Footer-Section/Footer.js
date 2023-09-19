import "./Footer-styles.css"

function Footer(){
    return(
        <>
        <div className="parent-box">
            <div className="child-box">
                <div className="box-1-top"></div>
                <div className="box-1-bottom"></div>
            </div>
            <div className="child-box">
                <h3>Contact</h3>
                <p><a href="./Contact">huzaifaameer00@gmail.com</a></p>
                <p><i class="fa-brands fa-square-whatsapp"></i> Whatsapp : 0774322222</p><br/>
                <h4>Follow On</h4>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-github"></i></a>
            </div>
            <div className="child-box">Box-3</div>
            <div className="child-box">Box-4</div>
        </div>
        </>
    );
}
export default Footer;