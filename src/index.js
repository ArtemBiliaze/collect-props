import { inputsArray } from "./data.js";
const emailRegExp = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/i;
const passwordRegExp =
  /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&.].*).{8,16}$/;

const form = document.createElement("form");
form.className = "form";
document.body.append(form);

const headerDiv = document.createElement("div");
const h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "Collect Properties";
headerDiv.append(h1);
form.append(headerDiv);

const formColumnInputDiv = document.createElement("div");
formColumnInputDiv.classList.add("form-column-input");
form.append(formColumnInputDiv);

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("button");
form.append(buttonDiv);

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "OK";
buttonDiv.append(submitButton);

const cancelButton = document.createElement("button");
cancelButton.type = "reset";
cancelButton.textContent = "CANCEL";
buttonDiv.append(cancelButton);

const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
form.insertBefore(errorMessage, buttonDiv);

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

function updateError(isTargetName, isValid, message) {
  if (isTargetName) {
    if (isValid) {
      errorMessage.classList.remove("invalid");
    } else {
      errorMessage.classList.add("invalid");
      errorMessage.textContent = message;
    }
  }
}

function inputHandler(e) {
  updateError(
    e.target.name === "email",
    emailRegExp.test(e.target.value),
    "Invalid Email"
  );
}

function inputPasswordHandler(e) {
  const password = document.querySelector('[name="password"]');
  const confirm = document.querySelector('[name="confirm-password"]');
  updateError(
    e.target.name === "password",
    passwordRegExp.test(e.target.value),
    "8–16 chars, uppercase, lowercase, number & special (!@#$%^&.)"
  );
  updateError(
    e.target.name === "confirm-password",
    confirm.value === password.value,
    "Passwords do not match"
  );
}
function submitHandler(e) {
  e.preventDefault();
  const person = new Person(...arrInput);

  localStorage.setItem(
    person.lname,
    JSON.stringify(person, (key, value) =>
      key === "email" || key === "password" ? undefined : value
    ),
    2
  );
  console.log("Saved person : ", person);
}

form.addEventListener("input", inputHandler);
form.addEventListener("input", inputPasswordHandler);
form.addEventListener("submit", submitHandler);
