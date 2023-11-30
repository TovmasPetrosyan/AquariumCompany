import contactImage from "../image/Group1.png";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'


function createContactPage() {
    const contactUs =  document.createElement("div");
    contactUs.setAttribute('id','contact');
    contactUs.setAttribute('class','contact-us');
    const childDiv =  document.createElement("div");
    childDiv.setAttribute("class", "childDiv");
    childDiv.appendChild(contactPageImage());
    const rightLayout =  document.createElement("div");
    rightLayout.setAttribute("class", "rightLayout");    
    rightLayout.appendChild(contactText());
    const formDiv =  document.createElement("div");
    formDiv.setAttribute("class", "formDiv");
    rightLayout.appendChild(formDiv);
    formDiv.appendChild(createContactForm());
    
       
         childDiv.appendChild(rightLayout)
         contactUs.appendChild(childDiv);
   
    return contactUs
    
}


const firebaseConfig = {
    apiKey: "AIzaSyDa2nDjCwnDMaN5Nq0wOo2eOWVBUZ14stU",
    authDomain: "first-project-b37b0.firebaseapp.com",
    databaseURL: "https://first-project-b37b0-default-rtdb.firebaseio.com",
    projectId: "first-project-b37b0",
    storageBucket: "first-project-b37b0.appspot.com",
    messagingSenderId: "456167382831",
    appId: "1:456167382831:web:b3c70858f691866c618bda",
    measurementId: "G-X9402W6CXY"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  


function contactPageImage(){
    const contactPageImage = document.createElement('img')
    contactPageImage.setAttribute("src", contactImage);
    return contactPageImage;
}

function createContactForm (){
    const form = document.createElement('form');
          form.setAttribute("class", "contact-form")
    const inputDiv = document.createElement('div');
    inputDiv.setAttribute('class', 'inputDiv');
    
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('name','name');
    nameInput.setAttribute('placeholder','Name');
    nameInput.setAttribute('required', true);
    nameInput.setAttribute('autocomplete', 'off');
    nameInput.classList.add('nameInput');
   


    const surNameInput = document.createElement('input');
    surNameInput.setAttribute('type','text');
    surNameInput.setAttribute('name','surName');
    surNameInput.setAttribute('placeholder','Surname');
    surNameInput.setAttribute('required', true);
    surNameInput.setAttribute('autocomplete', 'off')
    surNameInput.classList.add('nameInput');
    

    inputDiv.appendChild(nameInput);
    inputDiv.appendChild(surNameInput);

  
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type','email');
    emailInput.setAttribute('name','email');
    emailInput.setAttribute('placeholder','E-mail address');
    emailInput.setAttribute('required', true);
    emailInput.setAttribute('autocomplete', 'off')
    emailInput.classList.add('emailInput');    
  
    


    const messageTextarea = document.createElement('textarea');         
          messageTextarea.setAttribute('name', 'message');
          messageTextarea.setAttribute('placeholder', 'Message');
          messageTextarea.classList.add('textArea');
         
         

    const submitButton = document.createElement('button');
          submitButton.setAttribute('type', 'submit');
        //  submitButton.textContent = 'Send Message';
          submitButton.innerHTML = '<i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Send Message'
          submitButton.classList.add('submit-button');
          
          const parentDiv = document.createElement('div');
          parentDiv.setAttribute('class', 'submitDiv');
          parentDiv.appendChild(submitButton);
          
         
         
        
         const formDivElem = document.createElement('div');
          formDivElem.setAttribute('class', 'formDivElem');
          formDivElem.appendChild(inputDiv);
          formDivElem.appendChild(emailInput);
          formDivElem.appendChild(messageTextarea);
          form.appendChild(formDivElem);
          form.appendChild(parentDiv);
          

          form.addEventListener('submit', async (event) => {
            event.preventDefault();
        
            const formData = new FormData(form);
            const data = {};
        
            formData.forEach((value, key) => {
              data[key] = value;
            });
          try {
                       
              await addDoc(collection(db,'contact-form'),data);
              form.reset();
              console.log('Data sent to Firebase successfully!');
            } catch (error) {
              console.error('Error sending data to Firebase:', error);
            }
          });
         
         return form

}

function contactText(){
    const contactText = document.createElement("div")
    contactText.setAttribute("class", "contactText")
    const h1 = document.createElement("h1")
    const paragraph = document.createElement("p")
   
    h1.textContent = `Contact Us`
    paragraph.textContent = "Got a question? We’d love to hear from you. Send us  a message and we’ll respond as soon as possible."
   
    contactText.appendChild(h1);
    contactText.appendChild(paragraph);
   
    return contactText
}



export default createContactPage