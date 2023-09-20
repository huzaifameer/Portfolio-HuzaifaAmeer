import "./Gallery-styles.css"
import gallerImg1 from "../../Assets/huz1.png"
import gallerImg2 from "../../Assets/huz2.jpg"
import gallerImg3 from "../../Assets/huz3.jpg"
import gallerImg4 from "../../Assets/huz4.jpg"

function Gallery(){
    return(
        <div className="parent-cont-gal">
            <h1>Gallery</h1>
            <div class="gallery-card">
                <div className="image-container">
                <img src={gallerImg1} alt="Image 1" />
                </div>
                <div className="image-container">
                <img src={gallerImg2} alt="Image 2" />
                </div>
                <div className="image-container">
                <img src={gallerImg3} alt="Image 3" />
                </div>
                <div className="image-container">
                <img src={gallerImg4} alt="Image 4" />
                </div>
            </div>
        </div>
    )
        
}
export default Gallery;