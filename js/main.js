import { updateNavAuth } from "./components/navbar.js";
import { getAllPosts } from "./utils/postsManager.js";

let postsArray = await getAllPosts();

updateNavAuth();

console.log(postsArray);
