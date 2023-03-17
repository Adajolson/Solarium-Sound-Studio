import { useState } from "react"
import { GearList } from "./GearList"
import { GearSearch } from "./GearSearch"

export const GearContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <GearSearch setterFunction={setSearchTerms}/>
        <GearList searchTermState={searchTerms}/>
    </>
}