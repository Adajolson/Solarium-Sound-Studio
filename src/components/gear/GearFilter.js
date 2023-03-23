import { useState, useEffect } from "react"
import { GearItem } from "./GearItem"
import "./GearList.css"


export const GearFilter = () => {
    const[gearItems, setGearItems] = useState([])
    const[filteredItems, setFiltered] = useState([])
    const[categories, setCategories] = useState([])

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
            fetch('http://localhost:8088/categories')
            .then(response => response.json())
            .then((categoriesArray) => {
                setCategories(categoriesArray)
            })
        },
        [] 
    )

    return <>

        <select className="categoryFilter" onChange={(e) => {
              const filtered = gearItems.filter((gearItem)=> gearItem.categoriesId === parseInt(e.target.value) )
              setFiltered(filtered);
            }}> 
        <option  value="placeholder">Filter by Category</option> 
        {categories.map((category) => {
          return (
            <option value={category.id} key={category.id}>
              {category.id}- {category.name}
            </option>
          );
        })}
      </select>

      <h2>List of Gear</h2>
        <article className="gearItems flex flex-wrap p-10 m-2 space-y-3 bg-amber-500">
            {
                filteredItems.map(
                    (gearItem) => {
                        return <GearItem gearItemObject={gearItem} />
                    }
                    
                )
            }
        </article>
    </>
    }