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

let postsArray = await getAllPosts();
let postsWrapper = document.getElementById("posts-wrapper");

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
