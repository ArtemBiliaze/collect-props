import { inputsArray } from "./data.js";

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

const cancelButton = document.createElement("button");
cancelButton.type = "reset";
cancelButton.textContent = "CANCEL";
buttonDiv.appendChild(cancelButton);

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

inputsArray.forEach((input) => createInputsFields(input));

const arrInput = [...document.querySelectorAll("input")];

class Person {
  constructor(...args) {
    args.forEach(({ name, value }) => (this[name] = value));
  }
}

function submitHandler(e) {
  e.preventDefault();
  const person = new Person(...arrInput);

  localStorage.setItem(person.lname, JSON.stringify(person, (key, value) => (key === 'email' || key === "password") ? undefined : value), 2);
  console.log("Saved person : ", person);
}
form.addEventListener("submit", submitHandler);
