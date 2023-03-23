import { Outlet, Route, Routes } from "react-router-dom"
import { GearContainer } from "../gear/GearContainer"
import { RequestForm } from "../requests/RequestForm"
import { Monitoring } from "../gear/Monitoring"
import { Interface } from "../gear/Interface"
import { Preamps } from "../gear/Preamps"
import { Guitars } from "../gear/Guitars"
import { Synths } from "../gear/Synths"
import { Pedals } from "../gear/Pedals"
import { Mics } from "../gear/Mics"
import "./Views.css"
import logo from "../../images/SolariumJ.jpg"



export const CustomerViews = () => {
	return <>
	<Routes>
            <Route path="/" element={
                <>
                    <div><img className="logo" src={logo} alt=""/></div>
                    <h1 className="title">Solarium Sound Studio</h1>
                    <div className="city">San Francisco, CA</div>

                    <Outlet />
                </>
            }>
                <Route path="gearlist" element={ <GearContainer /> } />
				<Route path="requestform" element={ <RequestForm /> } />
				<Route path="gear/monitoring" element={ <Monitoring /> } />
				<Route path="gear/mics" element={ <Mics /> } />
				<Route path="gear/interface-converters-plugins" element={ <Interface /> } />
				<Route path="gear/preamps-eqs-compressors" element={ <Preamps /> } />
				<Route path="gear/guitar-bass" element={ <Guitars /> } />
				<Route path="gear/keys-synths" element={ <Synths /> } />
				<Route path="gear/outboardfx-pedals" element={ <Pedals /> } />
            </Route>
        </Routes>

	</>
}