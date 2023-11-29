import imgFish1 from "../image/fish1.png"
import imgFish2 from "../image/fish2.png"
import imgFish3 from "../image/fish3.png"
import imgFish4 from "../image/fish4.png"

function fishes(){
    const container = document.createElement("div")
    container.setAttribute("class", "fishes")

    const fish1 = document.createElement("img")
    fish1.setAttribute("src", imgFish1)

    const fish2 = document.createElement("img")
    fish2.setAttribute("src", imgFish2)

    const fish3 = document.createElement("img")
    fish3.setAttribute("src", imgFish3)

    const fish4 = document.createElement("img")
    fish4.setAttribute("src", imgFish4)

    container.appendChild(fish1)
    container.appendChild(fish2)
    container.appendChild(fish3)
    container.appendChild(fish4)
    return container
}

export default fishes
