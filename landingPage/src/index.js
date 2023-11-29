import "./styles/navStyle.css"
import "./styles/mainStyle.css"
import "./styles/headerStyle.css"
import createHomePage from "./scripts/createHomePage"
import createNav from "./scripts/navScript"
import createMain from "./scripts/mainScript"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const nav = createNav();
    root.appendChild(nav);
    root.appendChild(createHomePage());
    const header = createMain();
    root.appendChild(header);
  
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', function (event) {
        event.preventDefault();
        let targetId = event.target.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
      });
    });
  });
  


