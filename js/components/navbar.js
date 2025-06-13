import { tokenExists } from "../utils/auth.js";

let navBar = document.getElementById("nav-wrapper");

let updateNavAuth = () => {
  if (tokenExists()) {
    let createButton = document.createElement("button");
    createButton.classList.add(
      "btn",
      "btn-outline-post",
      "d-none",
      "d-md-block",
      "fs-6",
      "me-2"
    );
    createButton.setAttribute("type", "button");
    createButton.textContent = "Create post";
    let searchImage = document.createElement("img");
    searchImage.setAttribute("src", "../../assets/search.svg");
    searchImage.classList.add("d-block", "d-md-none", "me-2");
    let notificacionIcon = document.createElement("img");
    notificacionIcon.setAttribute("src", "../../assets/bell.svg");
    notificacionIcon.classList.add("me-2");
    let profileImage = document.createElement("img");
    profileImage.setAttribute("src", "https://picsum.photos/id/237/200/300");
    profileImage.classList.add("rounded-circle", "profile-picture");
    let signOutButton = document.createElement("button");
    signOutButton.textContent = "Sign Out";
    signOutButton.classList.add("btn");
    signOutButton.setAttribute("type", "button");
    navBar.append(
      createButton,
      searchImage,
      notificacionIcon,
      profileImage,
      signOutButton
    );
    signOutButton.addEventListener("click", (event) => {
      localStorage.removeItem("token");
      location.replace("../../views/login.html");
    });
  } else {
    let logInButton = document.createElement("a");
    logInButton.textContent = "Log In";
    logInButton.setAttribute("href", "../../views/login.html");
    logInButton.classList.add("btn");
    logInButton.setAttribute("type", "button");
    logInButton.setAttribute("alt", "Log in button");
    let createAccountButton = document.createElement("button");
    createAccountButton.textContent = "Create Account";
    createAccountButton.classList.add("btn", "btn-outline-primary");
    createAccountButton.setAttribute("type", "button");
    navBar.append(logInButton, createAccountButton);
  }
};

export { updateNavAuth };
