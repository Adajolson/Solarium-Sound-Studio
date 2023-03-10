import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Solarium } from "./Solarium"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Solarium />
    </BrowserRouter>
)
