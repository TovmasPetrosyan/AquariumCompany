function createNav () {
    const nav = document.createElement("nav");
    nav.setAttribute("class", "nav")
    nav.append(logo())
    const rootMenu = document.createElement("div")
    rootMenu.setAttribute("class", "rootMenu")
    rootMenu.appendChild( createUl())
    rootMenu.appendChild(registerNow())
    nav.appendChild(rootMenu)
    return nav
}

function createUl (){
    const ulForNav = document.createElement("ul");
    ['Home', 'Products', 'About Us', 'Contact'].forEach(item => {
        ulForNav.appendChild(createLi(item))
    });
    return ulForNav
}

function createLi(item){
    const liForNav = document.createElement("li");
    liForNav.setAttribute("class", item.toLowerCase());
    liForNav.textContent = item;
    return liForNav
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
