import { Link, useNavigate } from "react-router-dom"

export const EmployeeNav = () => {
    const navigate = useNavigate()

    return (
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
    )
}