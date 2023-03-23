import { useState, useEffect } from "react"


export const Monitoring = () => {
    const[gearItems, setGearItems] = useState([])
    const[filteredItems, setFiltered] = useState([])

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
            
                
                    const sortedGearItems = gearItems.filter(gearItem => {
                    return gearItem?.categories?.id === 2
                })
            setFiltered(sortedGearItems)},
         
        [  gearItems ]
    )
   return <>{
    filteredItems.map((filteredItem) => {
   <section className="gearItemObject py-8 px-8 max-w-sm mx-auto bg-orange-300 rounded-xl shadow-lg shadow-orange-300 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6" key={filteredItem.id}>
    <h3 className="gearCategories text-center space-y-2 sm:text-left">{filteredItem?.categories?.name}</h3>
    <img className="gearImage block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src={filteredItem.imageURL} alt=""/>
    <div className="space-y-0.5">
    <p className="gearName text-lg text-black font-semibold">{filteredItem.name}</p>
    </div>
    </section>
   })}</>
}