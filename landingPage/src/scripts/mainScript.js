import aquariumImage  from "./createAquarium";
import fishes from "./fishes";
import companyName  from "./createNamCompany";
import contactUs from "./contactUs";

function createMain(){
    const main = document.createElement("mian");
    main.setAttribute("class", "main")
    main.appendChild(companyName())
    main.appendChild(aquariumImage())
    main.appendChild(fishes())
    main.appendChild(contactUs())
    return main
}

export default createMain


