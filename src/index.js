"use strict";
const inputsArray = [
  {
    type: "text",
    name: "fname",
    placeholder: "First name",
    autocomplete: "name",
  },
  {
    type: "text",
    name: "lname",
    placeholder: "Last name",
    autocomplete: "family-name",
  },
  {
    type: "text",
    name: "nickname",
    placeholder: "nickname",
    autocomplete: "off",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email Address",
    autocomplete: "email",
  },
];

const form = document.createElement("form");
form.className = "form";
document.body.appendChild(form);

const headerDiv = document.createElement("div");
const h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "Collect Properties";

headerDiv.append(h1);
form.appendChild(headerDiv);

const formColumnInputDiv = document.createElement("div");
formColumnInputDiv.classList.add("form-column-input");
form.appendChild(formColumnInputDiv);

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("button");
form.appendChild(buttonDiv);

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "OK";
buttonDiv.appendChild(submitButton);

const canselButton = document.createElement("button");
canselButton.type = "reset";
canselButton.textContent = "CANCEL";
buttonDiv.appendChild(canselButton);

function createInputsFields(dataObj) {
  const { type, name, placeholder, autocomplete } = dataObj;
  const input = document.createElement("input");
  input.classList.add("input");
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.autocomplete = autocomplete;
  formColumnInputDiv.append(input);
}

inputsArray.forEach((i) => createInputsFields(i));

function createInputObj() {
  const objInfo = {};
  for (const { name, value, type } of Array.from(form.elements)) {
    if (type !== "submit" && type !== "reset") {
      objInfo[name] = value;
    }
  }
  return objInfo;
}

class Person {
  #email;
  constructor(data) {
    this.#email = data.email;
    delete data.email;
    Object.assign(this, data);
  }
  getEmail() {
    return this.#email;
  }
}

function submitClickHandler(e) {
  e.preventDefault();

  const dataObj = createInputObj();
  const person = new Person(dataObj);

  localStorage.setItem("lastName", JSON.stringify(person));
  console.log("Saved person : ", person);
  console.log("Saved email : ", person.getEmail());
}
form.addEventListener("submit", submitClickHandler);

console.log(localStorage.getItem("lastName"));
