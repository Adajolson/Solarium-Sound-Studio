import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const GearForm = () => {
    const [categories, setCategories] = useState([])
    const [gearItem, update] = useState({
        type: "",
        categoriesId: "",
        name: "",
        imageURL: ""
    })
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch('http://localhost:8088/categories')
            .then(response => response.json())
            .then((categoriesArray) => {
                setCategories(categoriesArray)
            })
            
        },
        [] 
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
      
        const gearItemToSendToAPI = {
            type: gearItem.type,
            categoriesId: parseInt(gearItem.categoriesId),
            name: gearItem.name,
            imageURL: gearItem.imageURL

        }
 

        // TODO: Perform the fetch() to POST the object to the API
        return fetch("http://localhost:8088/gearItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gearItemToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/gearlist")
            })
    }

    return (
        <form className="gearForm">
            <h2 className="gearForm__title">New Gear Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of Gear Item"
                        value={gearItem.name}
                        onChange={
                            (evt) => {
                                const copy = {...gearItem}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categories">Product Type:</label>

                    <select value={gearItem.categoriesId}
                    onChange={
                        (evt) => {
                            const copy = {...gearItem}
                            copy.categoriesId = evt.target.value
                            update(copy)
                        }
                    }>
                        <option value="0">Choose a category:</option>
                            {
                                categories.map(
                                    category => {
                                        return <option value={category.id} key={category.id}>{category.name}</option>
                                    }
                                )
                            }
        
                        
                    </select>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Gear Type:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Type of equipment"
                        value={gearItem.type}
                        onChange={
                            (evt) => {
                                const copy = {...gearItem}
                                copy.type = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image URL: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Put URL here"
                        value={gearItem.imageURL}
                        onChange={
                            (evt) => {
                                const copy = {...gearItem}
                                copy.imageURL = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}