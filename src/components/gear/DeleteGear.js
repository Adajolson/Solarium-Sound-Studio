import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const DeleteGear = () => {
    const [gearItems, setGearItems] = useState([])

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
    
        <h2>List of Gear</h2>
        <article className="gearItems">
            {
                gearItems?.map(
                    (gearItem) => {
                        return <section className="gearItem">
                            {gearItem.name}, Type:{gearItem.type}, {gearItem?.categories?.name}
                            <button onClick={() => 
                                fetch(`http://localhost:8088/gearItems/${gearItem.id}`, {
                                    method: "DELETE"
                                })
                                .then(() => {navigate("/gearlist")})}>Delete Gear</button>
                        </section>
                    }
                    
                )
            }
        </article>
    
    </>
    
}