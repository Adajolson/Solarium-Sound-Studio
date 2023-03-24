import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./GearList.css"



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
    
        <h2 className="gearListTitle" >List of Gear</h2>
        <article className="gearItems">
            {
                gearItems?.map(
                    (gearItem) => {
                        return <><section className="gearItemObject py-8 px-8 max-w-sm mx-auto bg-orange-300 rounded-xl shadow-lg shadow-orange-300 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6" key={gearItem.id}>
                        <h3 className="gearCategories text-center space-y-2 sm:text-left">{gearItem?.categories?.name}</h3>
                        <img className="gearImage block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src={gearItem.imageURL} alt=""/>
                        <div className="space-y-0.5">
                        <p className="gearName text-lg text-black font-semibold">{gearItem.name}</p>
                        </div>
                    
                            <button className="deleteButton rounded-full" onClick={() => 
                                fetch(`http://localhost:8088/gearItems/${gearItem.id}`, {
                                    method: "DELETE"
                                })
                                .then(() => {navigate("/gearlist")})}>Delete Gear</button>
                        </section></>
                    }
                    
                )
            }
        </article>
    
    </>
    
}