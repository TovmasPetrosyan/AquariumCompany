import aquariumImage  from "./createAquarium";
import fishes from "./fishes";
import companyName  from "./createNamCompany";


function createMain(){
    const main = document.createElement("main");
    main.setAttribute("class", "main")
    main.setAttribute("id", "products")
    main.appendChild(companyName())
    main.appendChild(aquariumImage())
    main.appendChild(fishes())
    return main
}

export default createMain


