import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GearItem } from "./GearItem"
import "./GearList.css"
import { Mics } from "./Mics"


export const GearList = ({ searchTermState }) => {
    const [gearItems, setGearItems] = useState([])
    const [filteredGearItems, setFiltered] = useState([])
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

    useEffect(
        () => {
            if (searchTermState?.length > 0) {
                
                    const searchedGearItems = gearItems.filter(gearItem => {
                    return gearItem?.name?.toLowerCase().includes(searchTermState.toLowerCase())  ||
                    gearItem?.category?.toLowerCase().includes(searchTermState.toLowerCase()) ||
                    gearItem?.type?.toLowerCase().includes(searchTermState.toLowerCase()) 
                })
            setFiltered(searchedGearItems)}
            else {setFiltered(gearItems)}
        },
        [ searchTermState, gearItems ]
    )
    
    return <>
    {
        solariumUserObject.staff
        ?<>
        <button className="gearButton" onClick={() => navigate("/gear/add")}>Add Gear</button>
        <button className="gearButton" onClick={() => navigate("/gear/delete")}>Delete Gear</button>
        </>
        : ""
    }
        <h2>List of Gear</h2>
        <article className="gearItems flex flex-wrap p-10 m-2 space-y-3 bg-amber-500">
            {
                filteredGearItems.map(
                    (gearItem) => {
                        return <GearItem gearItemObject={gearItem} />
                    }
                    
                )
            }
        </article>
    
    </>
    
}