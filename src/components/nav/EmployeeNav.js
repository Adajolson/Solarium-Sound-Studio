import { Link, useNavigate } from "react-router-dom"

export const EmployeeNav = () => {
    const navigate = useNavigate()

    return  ( <>
        <div className="dots" onclick="this.classList.toggle('active');">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="shadow cut"></div>
            <div className="container cut">
                <div className="drop cut2"></div>
            </div>
            <div className="list">
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
            <div className="dot"></div>
        </div>
      <div className="cursor"
           onclick="document.querySelector('.dots').classList.toggle('active');"></div>
        </>
    )
}

