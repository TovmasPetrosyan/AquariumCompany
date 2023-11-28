import aquariumImage  from "./createAquarium";
import fishes from "./fishes";
import companyName  from "./createNamCompany";


function createMain(){
    const main = document.createElement("mian");
    main.setAttribute("class", "main")
    main.appendChild(companyName())
    main.appendChild(aquariumImage())
    main.appendChild(fishes())
    return main
}

export default createMain


