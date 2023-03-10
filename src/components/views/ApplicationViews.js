import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {

    const localSolariumUser = localStorage.getItem("solarium_user")
    const solariumUserObject = JSON.parse(localSolariumUser)

    if (solariumUserObject.staff) {
        return <EmployeeViews />
    }
    else  {
        return <CustomerViews />
    }

}