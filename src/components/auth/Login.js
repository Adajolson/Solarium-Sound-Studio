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
        <div className="container--login object-center h-screen">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="title">Solarium Sound Studio</h1>
                    <h2 className="signIn">Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"></label>
                        <input className="email text-center pt-6 form-control" type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </div>
    )
}
