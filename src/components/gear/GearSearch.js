import "./GearList.css"

export const GearSearch = ({ setterFunction }) => {
    return (
        <div>

        <input className="searchBar"
            onKeyUp={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
        type="text" placeholder="Enter search terms" />
        </div>
        )
}