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
        <div className="formBody">
        <form className="form">
            <h2 className="title">New Gear Item</h2>
            <fieldset>
                <div className="input-container ic1">
                    <input
                        id="gearName"
                        type="text"
                        className="input"
                        placeholder="Name of Gear Item"
                        value={gearItem.name}
                        onChange={
                            (evt) => {
                                const copy = {...gearItem}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                        <div class="cut"></div>
                </div>
            </fieldset>
            <fieldset>
                <div className="input-container ic2">
                    <select id="productType" className="input" value={gearItem.categoriesId}
                    onChange={
                        (evt) => {
                            const copy = {...gearItem}
                            copy.categoriesId = evt.target.value
                            update(copy)
                        }
                    }>
                        <option value="0">Product Type:</option>
                            {
                                categories.map(
                                    category => {
                                        return <option value={category.id} key={category.id}>{category.name}</option>
                                    }
                                )
                            }
        
                        
                    </select>
                    <div class="cut"></div>
                </div>
            </fieldset> 
            <fieldset>
                <div className="input-container ic2">
                    <input
                        id="type"
                        type="text"
                        className="input"
                        placeholder="Type of equipment"
                        value={gearItem.type}
                        onChange={
                            (evt) => {
                                const copy = {...gearItem}
                                copy.type = evt.target.value
                                update(copy)
                            }
                        } />
                        <div class="cut"></div>
                </div>
            </fieldset>
            <fieldset>
                <div className="input-container ic2">
                    <input
                        id="image"
                        type="text"
                        className="input"
                        placeholder="Put Image URL here"
                        value={gearItem.imageURL}
                        onChange={
                            (evt) => {
                                const copy = {...gearItem}
                                copy.imageURL = evt.target.value
                                update(copy)
                            }
                        } />
                        <div class="cut cut-short"></div>
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="submit">
                Submit
            </button>
        </form>
        </div>
    )
}