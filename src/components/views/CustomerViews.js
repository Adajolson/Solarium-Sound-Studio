import { Outlet, Route, Routes } from "react-router-dom"
import { GearContainer } from "../gear/GearContainer"
import { RequestForm } from "../requests/RequestForm"
import { Studio } from "../studio/Studio"
import "./Views.css"




export const CustomerViews = () => {
	return <>
	<Routes>
            <Route path="/" element={
                <>
                    
                    <h1 className="siteTitle">Solarium Sound Studio</h1>
                    <div className="city">San Francisco, CA</div>
                
                    <Outlet />
                    

                </>
            }>
                <Route path="studio" element={ <Studio />} />
                <Route path="gearlist" element={ <GearContainer /> } />
				<Route path="requestform" element={ <RequestForm /> } />
            </Route>
        </Routes>

	</>
}