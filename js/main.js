import { updateNavAuth } from "./components/navbar.js";
import { getAllPosts } from "./utils/postsManager.js";
import {
  userData,
  createTagsSection,
  postTitle,
  createCardBody,
  createMetaSection,
} from "./utils/domHelpers.js";
import { emojisArray } from "./utils/constants.js";
import { formatDate } from "./utils/formatDate.js";

let postsArray = await getAllPosts();
let postsWrapper = document.getElementById("posts-wrapper");
let searchInput = document.getElementById("search-input");
let searchResultsWrapper = document.getElementById("search-results");
let resultstList = document.getElementById("results-list");

updateNavAuth();

console.log(postsArray);

const showPosts = (posts) => {
  posts.forEach((post, index) => {
    /*sección de datos de usuario*/
    const userSection = userData(post);
    /*título del post*/
    const title = postTitle(post);
    /*tags del post*/
    const tags = createTagsSection(post);
    /*sección de emojis*/
    let metaSection = createMetaSection(emojisArray, post);
    /*cuerpo de la card*/
    let bodyCard = createCardBody(userSection, title, tags, metaSection);
    /*crear card*/
    let card = document.createElement("div");
    card.classList.add("card", "mb-2", "rounded");

    if (index === 0) {
      let imageCard = document.createElement("img");
      imageCard.classList.add("card-img-top", "post-image");
      imageCard.setAttribute("src", post.image);
      card.append(imageCard, bodyCard);
    } else {
      /*cuerpo de la card*/
      card.append(bodyCard);
    }
    postsWrapper.append(card);
  });
};

showPosts(postsArray);

searchInput.addEventListener("input", (event) => {
  let inputValue = event.target.value;
  if (inputValue.length > 1) {
    searchResultsWrapper.classList.remove("d-none");
    resultstList.innerHTML = "";
    postsArray.forEach((post) => {
      if (post.title.toLowerCase().includes(inputValue.toLowerCase())) {
        let listElement = document.createElement("li");
        listElement.classList.add("px-3", "py-1");
        let postUser = document.createElement("small");
        postUser.textContent = post.author.name;
        postUser.classList.add("text-results-color");
        let postTitle = document.createElement("p");
        postTitle.textContent = post.title;
        postTitle.classList.add("fs-6");
        postTitle.classList.add("m-0");
        let postDate = document.createElement("small");
        postDate.classList.add("text-results-color");
        postDate.textContent = formatDate(post);
        listElement.append(postUser, postTitle, postDate);
        resultstList.append(listElement);
      }
    });
  } else {
    searchResultsWrapper.classList.add("d-none");
  }
});
