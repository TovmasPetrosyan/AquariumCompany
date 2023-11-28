import contactImage from "../image/fish3.png";

function contactPageImage(){
    const contactPageImage = document.createElement('img')
    contactPageImage.setAttribute("src", contactImage);
    return contactPageImage;
}

function createContactForm (){
    const form = createElement('form');

    const nameInput = createElement('input');
    nameInput.setAtribute('type','text');
    nameInput.setAtribute('name','name');
    nameInput.setAtribute('placeholder','Name');
    nameInput.setAttribute('required', true);

    const surNameInput = createElement('input');
    surNameInput.setAtribute('type','text');
    surNameInput.setAtribute('name','surName');
    surNameInput.setAtribute('placeholder','Surname');
    surNameInput.setAttribute('required', true);

    const emailInput = createElement('input');
    surNameInput.setAtribute('type','email');
    surNameInput.setAtribute('name','email');
    surNameInput.setAtribute('placeholder','E-mail address');
    surNameInput.setAttribute('required', true);


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

          document.body.appendChild(form);

}