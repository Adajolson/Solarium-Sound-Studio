import photo1 from "../../images/Solarium1.jpg"
import photo2 from "../../images/Solarium2.jpg"
import photo3 from "../../images/Solarium3.jpg"
import photo4 from "../../images/Solarium4.jpg"
import "./Studio.css"

export const Studio = () => {
    return <>
    <div className="photo-container">
        <img className="photo" src={photo1} alt=""></img>
        <img className="photo" src={photo2} alt=""></img>    
        <img className="photo" src={photo3} alt=""></img>    
        <img className="photo" src={photo4} alt=""></img>  
    </div>     
    </>
}