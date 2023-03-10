import { Outlet, Route, Routes } from "react-router-dom"



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

            </Route>
        </Routes>

	</>
}