import { Link, useNavigate } from "react-router-dom"
import logo from "../../images/SolariumJ.jpg"
import "./NavBar.css"

export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div><img className="logo" src={logo} alt="" /></div>
                </div>
                <div class="flip-card-back">
                    <ul className="navbar">
                        <li className="navbar__item navbar__gear">
                            <Link className="navbar__link" to="/gearlist">Gear</Link>
                        </li>
                        <li className="navbar__item navbar__gear">
                            <Link className="navbar__link" to="/requestform">Request Form</Link>
                        </li>
                        <li className="navbar__item navbar__logout">
                            <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("solarium_user")
                            navigate("/", {replace: true})
                            }}>Logout</Link>
                        </li>
                    </ul>  
                </div>
            </div>
        </div>
    )
}