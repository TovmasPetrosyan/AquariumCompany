import "./styles/navStyle.css"
import "./styles/mainStyle.css"
import "./styles/headerStyle.css"
import "./styles/contactUs.css"
import createHomePage from "./scripts/createHomePage"
import createNav from "./scripts/navScript"
import createMain from "./scripts/mainScript"


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const nav = createNav()
    root.appendChild(nav)
    root.appendChild(createHomePage())
    const header = createMain()
    root.appendChild(header)
})



