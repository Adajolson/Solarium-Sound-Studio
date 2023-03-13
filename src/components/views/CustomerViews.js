import { Outlet, Route, Routes } from "react-router-dom"
import { GearList } from "../gear/GearList"
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
                <Route path="gearlist" element={ <GearList /> } />
				<Route path="requestform" element={ <RequestForm /> } />
            </Route>
        </Routes>

	</>
}