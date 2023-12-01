function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
     console.log("Smooth scrolling to:", targetId)
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
        console.log("Element not found:", targetId);
      }
  }

function createNav () {
    const nav = document.createElement("nav")
    nav.setAttribute("class", "nav")
    nav.append(logo())
    const burgerMenu = document.createElement("i")
    burgerMenu.setAttribute("class", "fa-solid fa-bars")
    const burgerMenuButton = document.createElement("div")
    burgerMenuButton.setAttribute('class', 'burger-icon')
    burgerMenuButton.append(burgerMenu)
    const rootMenu = document.createElement("div")
    rootMenu.setAttribute("class", "rootMenu")
    rootMenu.appendChild( createUl())
    rootMenu.append(burgerMenuButton)
    rootMenu.appendChild(registerNow())
    nav.appendChild(rootMenu)

    nav.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
          event.preventDefault();
            var targetId = event.target.getAttribute('href').substring(1);
         smoothScrollTo(targetId.toLowerCase());
        }
      });

    return nav
}

function createUl (){
    const ulForNav = document.createElement("ul");
    ['Home', 'Products', 'About Us', 'Contact'].forEach(item => {
        ulForNav.appendChild(createLi(item));
    });
    return ulForNav;
}

function createLi(item){
    const liForNav = document.createElement("li");
    const aForNav = document.createElement("a");
    const targetId = "#" + item.toLowerCase();
    aForNav.setAttribute("href",  targetId)
    aForNav.textContent = item;

    aForNav.addEventListener('click', function (event) {
        event.preventDefault();
        var targetId = event.target.getAttribute('href').substring(1);
        smoothScrollTo(targetId.toLowerCase());
      });

    liForNav.appendChild(aForNav);
    return liForNav;
}

function logo (){
    const logoElement = document.createElement("h3");
    logoElement.textContent = "FishHome";
    return logoElement
}

function registerNow (){
    const registerButton = document.createElement("button");
    registerButton.textContent = "Register Now ";
    return registerButton
}

export default createNav
export { smoothScrollTo, createLi }

export function openMenu() {
  document.querySelector('.burger-icon').addEventListener('click', () => {
    const menu = document.querySelector('.rootMenu ul')
    if (menu) {
      menu.classList.toggle('active')
    }
  })
  
}
