import { Outlet, Route, Routes } from "react-router-dom"
import { GearContainer } from "../gear/GearContainer"
import { RequestForm } from "../requests/RequestForm"



export const CustomerViews = () => {
	return <>
	<Routes>
            <Route path="/" element={
                <>
                    <h1>Solarium Sound Studio</h1>
                    <div>San Francisco, CA</div>

                    <Outlet />
                </>
            }>
                <Route path="gearlist" element={ <GearContainer /> } />
				<Route path="requestform" element={ <RequestForm /> } />
            </Route>
        </Routes>

	</>
}