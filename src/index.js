"use strict";
const form = document.createElement("form");
form.className = "form";
document.body.appendChild(form);

const headerDiv = document.createElement("div");
const h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "Collect Properties";

const p = document.createElement("p");
p.className = "form-subheader";


headerDiv.append(h1, p);
form.appendChild(headerDiv);

const formMainInputDiv = document.createElement("div");
formMainInputDiv.classList.add("form-main-input");
form.appendChild(formMainInputDiv);

const formColumnInputDiv1 = document.createElement("div");
formColumnInputDiv1.classList.add("form-column-input");
formMainInputDiv.appendChild(formColumnInputDiv1);

const inputFname = document.createElement("input");
inputFname.classList.add("input");
inputFname.type = "text";
inputFname.id = "fname";
inputFname.placeholder = "First name";
inputFname.autocomplete = 'name'
inputFname.required = true;
formColumnInputDiv1.appendChild(inputFname);

const inputNickName = document.createElement("input");
inputNickName.classList.add("input");
inputNickName.type = "text";
inputNickName.id = "dname";
inputNickName.placeholder = "nickname";
// inputNickName.autocomplete = "nickname";
inputNickName.required = true;
formColumnInputDiv1.appendChild(inputNickName);

const formColumnInputDiv2 = document.createElement("div");
formColumnInputDiv2.classList.add("form-column-input");
formMainInputDiv.appendChild(formColumnInputDiv2);

const inputLname = document.createElement("input");
inputLname.classList.add("input");
inputLname.type = "text";
inputLname.id = "lname";
inputLname.placeholder = "Last name";
inputLname.autocomplete = 'family-name';
inputLname.required = true;
formColumnInputDiv2.appendChild(inputLname);

const inputEmail = document.createElement("input");
inputEmail.classList.add("input");
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.placeholder = "Email Address";
inputEmail.autocomplete = 'email'
inputEmail.required = true;
formColumnInputDiv2.appendChild(inputEmail);

const buttonDiv = document.createElement("div");
buttonDiv.classList.add('button')
form.appendChild(buttonDiv);

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "OK";
buttonDiv.appendChild(submitButton);

const canselButton = document.createElement('button')
canselButton.type = 'reset';
canselButton.textContent = 'CANCEL'
buttonDiv.appendChild(canselButton)

class Person {
  constructor(firstName, lastName, nickName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.email = email;
  }
}

function submitClickHandler(e){
    const person = new Person(inputFname.value, inputLname.value, inputNickName.value, inputEmail.value)
    localStorage.setItem('lastName', JSON.stringify(person))
}
submitButton.addEventListener("click", submitClickHandler);
 console.log(localStorage.getItem('lastName'));
