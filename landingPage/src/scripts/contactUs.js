import contactImage from "../image/Group3.png";

function createContactPage() {
    const contactUs =  document.createElement("section");
    contactUs.setAttribute('class','contact-us');
    const childDiv =  document.createElement("div");
    childDiv.setAttribute("class", "childDiv");
    childDiv.appendChild(contactPageImage());
    const rightLayout =  document.createElement("div");
    rightLayout.setAttribute("class", "rightLayout");
    const contactUsDiv =  document.createElement("div");
    contactUsDiv.setAttribute("class", "contactText");
    rightLayout.appendChild(contactUsDiv);
    contactUsDiv.appendChild(contactText());
    const formDiv =  document.createElement("div");
    formDiv.setAttribute("class", "formDiv");
    rightLayout.appendChild(formDiv);
    formDiv.appendChild(createContactForm());
    
       
         childDiv.appendChild(rightLayout)
         contactUs.appendChild(childDiv);
   
    return contactUs
    
}






function contactPageImage(){
    const contactPageImage = document.createElement('img')
    contactPageImage.setAttribute("src", contactImage);
    return contactPageImage;
}

function createContactForm (){
    const form = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('name','name');
    nameInput.setAttribute('placeholder','Name');
    nameInput.setAttribute('required', true);

    const surNameInput = document.createElement('input');
    surNameInput.setAttribute('type','text');
    surNameInput.setAttribute('name','surName');
    surNameInput.setAttribute('placeholder','Surname');
    surNameInput.setAttribute('required', true);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type','email');
    emailInput.setAttribute('name','email');
    emailInput.setAttribute('placeholder','E-mail address');
    emailInput.setAttribute('required', true);


    const messageTextarea = document.createElement('textarea');
          messageTextarea.setAttribute('name', 'message');
          messageTextarea.setAttribute('placeholder', 'Message');

    const submitButton = document.createElement('button');
          submitButton.setAttribute('type', 'submit');
          submitButton.textContent = 'Send Message';
    
          form.appendChild(nameInput);
          form.appendChild(surNameInput);
          form.appendChild(emailInput);
          form.appendChild(messageTextarea);
          form.appendChild(submitButton);
       
         return form

}

function contactText(){
    const contactText = document.createElement("div")
    contactText.setAttribute("class", "contactText")
    const h1 = document.createElement("h1")
    const paragraph = document.createElement("p")
   
    h1.textContent = `Contact Us`
    paragraph.textContent = "Got a question? We’d love to hear from you. Send us  a message and we’ll respond as soon as possible."
   
    contactText.appendChild(h1)
    contactText.appendChild(paragraph)
   
    return contactText
}



export default createContactPage