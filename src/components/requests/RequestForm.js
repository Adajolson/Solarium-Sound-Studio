import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
        <form className="requestForm">
            <h2 className="requestForm__title">New Service request</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="details">Details:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Let us know what we can help with."
                        value={request.details}
                        onChange={
                            (evt) => {
                                const copy = {...request}
                                copy.details = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="dateRequested">Date requested:</label>
                    <input 
                    required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Let us know when you'd like to come in."
                        value={request.dateRequested}
                        onChange={
                            (evt) => {
                                const copy = {...request}
                                copy.dateRequested = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Request
            </button>
        </form>
    )
}