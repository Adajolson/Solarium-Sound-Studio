import { Outlet, Route, Routes } from "react-router-dom"
import { DeleteGear } from "../gear/DeleteGear"
import { GearForm } from "../gear/GearForm"
import { GearList } from "../gear/GearList"
import { RequestList } from "../requests/RequestList"
import "./Views.css"


export const EmployeeViews = () => {
	return <>
	<Routes>
            <Route path="/" element={
                <>
                    
                    <h1 className="siteTitle">Solarium Sound Studio</h1>
                    <div className="city">San Francisco, CA</div>

                    <Outlet />
                    
                </>
            }>
                <Route path="gearlist" element={ <GearList /> } />
				<Route path="requests" element={ <RequestList /> } />
                <Route path="gear/add" element={ <GearForm /> } />
                <Route path="gear/delete" element={ <DeleteGear/> } />

            </Route>
        </Routes>

	</>
}