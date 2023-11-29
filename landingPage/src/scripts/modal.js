import modalImg from '../image/contact-thank-you.svg'

function createModal(){
    const modalWrap = document.createElement("div");
    modalWrap.setAttribute("class", "modal-wrap display-none");
   
    const modal = document.createElement("div");
          modal.setAttribute("class", "modal");
         
    const img = document.createElement("img"); 
          img.setAttribute("src",modalImg);
    const par1 = document.createElement("p");
          par1.innerText = "Thank you for your submission!";
    const par2 = document.createElement("p");
          par2.innerText = "We will be back in touch in 24-48 hours.";
    const button = document.createElement("button");
          button.setAttribute("class", "btn modal-close");
          button.textContent = "Close";
     
          
          modal.appendChild(img);
          modal.appendChild(par1);
          modal.appendChild(par2);
          modal.appendChild(button);
          modalWrap.appendChild(modal);

    return modalWrap
}

export default createModal