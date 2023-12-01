import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import '@fortawesome/fontawesome-free/css/all.css';
import "./styles/navStyle.css";
import "./styles/mainStyle.css";
import "./styles/headerStyle.css";
import "./styles/contactUs.css";
import "./styles/aquaStyle.css"
import createHomePage from "./scripts/createHomePage";
import createNav from "./scripts/navScript";
import createMain from "./scripts/mainScript";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const nav = createNav();
  root.appendChild(nav);
  root.appendChild(createHomePage());
  const header = createMain();
  root.appendChild(header);

  const navLinks = document.querySelectorAll(".nav ul li a");
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      let targetId = event.target.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

  
  
  
const firebaseConfig = {
    apiKey: "AIzaSyDa2nDjCwnDMaN5Nq0wOo2eOWVBUZ14stU",
    authDomain: "first-project-b37b0.firebaseapp.com",
    databaseURL: "https://first-project-b37b0-default-rtdb.firebaseio.com",
    projectId: "first-project-b37b0",
    storageBucket: "first-project-b37b0.appspot.com",
    messagingSenderId: "456167382831",
    appId: "1:456167382831:web:b3c70858f691866c618bda",
    measurementId: "G-X9402W6CXY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  