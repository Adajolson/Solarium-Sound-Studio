import { Link, useNavigate } from "react-router-dom"
import logo from "../../images/SolariumJ.jpg"
import "./NavBar.css"

export const EmployeeNav = () => {
    const navigate = useNavigate()

    return  ( <>
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
                                <Link className="navbar__link" to="/requests">Requests</Link>
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
            </>
    )
}

{/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={logo} alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div> */}