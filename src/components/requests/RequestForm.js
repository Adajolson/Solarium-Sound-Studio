import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./RequestForm.css"
import "./Request.css"

export const RequestForm = () => {

    const [request, update] = useState({
        details: "",
        dateRequested: "",
    })
    const navigate = useNavigate()

    const localSolariumUser = localStorage.getItem("solarium_user")
    const solariumUserObject = JSON.parse(localSolariumUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const requestToSendToAPI = {
            userId: solariumUserObject.id,
            details: request.details,
            description: request.description,
            dateRequested: request.dateRequested,
        }
 

        // TODO: Perform the fetch() to POST the object to the API
        return fetch("http://localhost:8088/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestToSendToAPI)
        })
            .then(response => response.json())
            .then(window.alert("Your request has been sent!"))
            .then(() => {
                navigate("/")
            })
    }

    return (
        <div className="formBody">
        <form className="form">
            <h2 className="title">New Rental Request</h2>
            <div className="subtitle">Let's create your request!</div>
            <fieldset>
                <div className="input-container ic1">
                    <input
                        id="reservationDetails"
                        type="text"
                        className="input"
                        placeholder="Tell us what you need!"
                        value={request.details}
                        onChange={
                            (evt) => {
                                const copy = {...request}
                                copy.details = evt.target.value
                                update(copy)
                            }
                        } />
                        <div className="cut"></div>

                </div>
            </fieldset>
            <fieldset>
                <div className="input-container ic2">
                    <label htmlFor="dateRequested">Date requested:</label>
                    <input 
                        id="dateRequested"
                        type="date"
                        className="input"
                        placeholder=" "
                        value={request.dateRequested}
                        onChange={
                            (evt) => {
                                const copy = {...request}
                                copy.dateRequested = evt.target.value
                                update(copy)
                            }
                        } />
                        <div class="cut"></div>
                        
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="submit">
                Submit Request
            </button>
        </form>
        </div>
    )
}