import { useState } from "react"
import { GearFilter } from "./GearFilter"
import { GearList } from "./GearList"
import { GearSearch } from "./GearSearch"

export const GearContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <GearSearch setterFunction={setSearchTerms}/>
        <GearFilter/> 
        <GearList searchTermState={searchTerms}/>
    </>
}