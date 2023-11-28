import homeImage from "../image/homepage.png";

function createHomePage() {
    const header =  document.createElement("header")
    const headerDiv =  document.createElement("div")
    header.setAttribute("class", "header")
    headerDiv.setAttribute("class", "headerDiv")
    headerDiv.appendChild(homeText())
    headerDiv.appendChild(homePageImage())
    header.appendChild(headerDiv)
    return header
    
}

function homePageImage(){
    const homePageImage = document.createElement("img")
    homePageImage.setAttribute("src", homeImage)
    return homePageImage
}

function homeText(){
    const homeText = document.createElement("div")
    homeText.setAttribute("class", "homeText")
    const paragraph1 = document.createElement("p")
    const paragraph2 = document.createElement("p")
    const paragraph3 = document.createElement("p")
    paragraph1.textContent = `Welcome to FishHome! Dive into the vibrant world of our aquarium, where four colorful fish await to animate your underwater kingdom. Each fish boasts a unique personality, colors, and features.`
    paragraph2.textContent = "Simply touch the screen to interact with them. Upon your touch, a fish will gracefully swim into your aquarium, adding life and color. But wait, there's more! Another touch changes the fish's direction, giving you control over the game's dynamics."
    paragraph3.textContent = "Create diverse fish combinations, observe their behavior, and enjoy the magic of FishHome. This game offers fun for all ages, providing a relaxing escape into the mesmerizing underwater world."
    homeText.appendChild(paragraph1)
    homeText.appendChild(paragraph2)
    homeText.appendChild(paragraph3)
    return homeText
}

export default createHomePage