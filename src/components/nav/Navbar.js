import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"

export const NavBar = () => {
    const localSolariumUser = localStorage.getItem("solarium_user")
    const solariumUserObject = JSON.parse(localSolariumUser)

    if (solariumUserObject.staff) {
        return <EmployeeNav />
    }
    else  {
        return <CustomerNav />
    }
}