import { validateInputs } from "./utils/validateInputs.js";

let formInputs = document.querySelectorAll(".form-login .form-control");
let formButton = document.getElementById("form-button");
let formWrapper = document.getElementsByClassName("form-login");
let mainContainer = document.getElementById("main-container");
let body = document.body;

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  let inputs = validateInputs(formInputs);
  if (inputs.includes(false)) {
    let anchorContact = document.createElement("a");
    anchorContact.classList.add("text-decoration-none");
    anchorContact.setAttribute("href", "#");
    anchorContact.textContent = "Contact us";
    let contactText = document.createElement("p");
    contactText.classList.add("m-0");
    contactText.append(anchorContact, " if you continue having trouble.");
    let confirmEmail = document.createElement("a");
    confirmEmail.classList.add("text-decoration-none");
    confirmEmail.setAttribute("href", "#");
    confirmEmail.textContent = "click here";
    let confirmEmailText = document.createElement("p");
    confirmEmailText.classList.add("m-0", "text-wrap");
    confirmEmailText.append(
      "If you haven't created an account, we recommend signing up with social authentication below. If you haven't received your confirmation email yet, ",
      confirmEmail,
      " to resend it."
    );

    let unableLoginText = document.createElement("p");
    unableLoginText.classList.add("fw-bold", "m-0");
    unableLoginText.textContent = "Unable to login.";
    let noticeWrapper = document.createElement("div");
    noticeWrapper.classList.add(
      "text-start",
      "notice-wrapper",
      "p-2",
      "warning-note",
      "mt-3"
    );
    body.classList.add(
      "d-flex",
      "flex-column",
      "justify-content-center",
      "align-items-center"
    );
    noticeWrapper.append(unableLoginText, confirmEmailText, contactText);
    body.insertBefore(noticeWrapper, mainContainer);
  } else {
    let token =
      " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    localStorage.setItem("token", token);
    location.replace("../index.html");
  }
});
