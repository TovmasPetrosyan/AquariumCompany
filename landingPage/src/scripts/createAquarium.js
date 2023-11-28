import img from "../image/aquarium.jpg"

function aquariumImage(){
    const aquariumImg = document.createElement("img")
    aquariumImg.setAttribute("src", img)
    return aquariumImg
}

export default aquariumImage