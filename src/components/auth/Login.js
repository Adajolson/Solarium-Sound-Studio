import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("adam@olson.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("solarium_user", JSON.stringify({
                        id: user.id,
                        staff: user.isStaff
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <div className="formBody">
        <div className="form">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="title">Solarium Sound Studio</h1>
                    <h2 className="subtitle">Please sign in</h2>
                    <fieldset>
                        <div className="input-container ic1">
                        <input id="email" className="input" type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            placeholder="Email address"
                            required autoFocus />
                            <div class="cut"></div>
                            </div>
                    </fieldset>
                    <fieldset>
                        <div className="button-container">
                        <button className="button-arounder" type="submit">
                            Sign in
                        </button>
                        </div>
                    </fieldset>
                </form>
            </section>
            <div className="button-container">
            <section className="button-arounder">
                <Link to="/register">Not a member yet?</Link>
            </section></div>
        </div>
        </div>
    )
}
