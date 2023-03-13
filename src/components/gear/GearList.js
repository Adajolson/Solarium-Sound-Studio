import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const GearList = () => {
    const [gearItems, setGearItems] = useState([])

    const localSolariumUser = localStorage.getItem("solarium_user")
    const solariumUserObject = JSON.parse(localSolariumUser)
    const navigate = useNavigate()


    useEffect(
        () => {
            fetch('http://localhost:8088/gearItems?_expand=categories')
            .then(response => response.json())
            .then((gearItemArray) => {
                setGearItems(gearItemArray)
            })
            
        },
        [] 
    )

    return <>
    {
        solariumUserObject.staff
        ?<>
        <button onClick={() => navigate("/gear/add")}>Add Gear</button>
        <button onClick={() => navigate("/gear/delete")}>Delete Gear</button>
        </>
        : ""
    }
        <h2>List of Gear</h2>
        <article className="gearItems">
            {
                gearItems?.map(
                    (gearItem) => {
                        return <section className="gearItem">
                            {gearItem.name}, Type:{gearItem.type}, {gearItem?.categories?.name}
                        </section>
                    }
                    
                )
            }
        </article>
    
    </>
    
}