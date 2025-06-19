/*sección de datos de usuario*/
const userData = (postArgument) => {
  const userName = document.createElement("p");
  userName.textContent = postArgument.author.name;
  userName.classList.add("m-0", "user-tags-size");
  const userImage = document.createElement("img");
  userImage.classList.add("rounded-circle", "user-image");
  userImage.setAttribute("src", postArgument.author.avatar);
  const userSection = document.createElement("div");
  userSection.classList.add("d-flex", "align-items-center", "gap-3");
  userSection.append(userImage, userName);
  return userSection;
};

/*título del post*/
const postTitle = (postArgument) => {
  const titleCard = document.createElement("h5");
  titleCard.classList.add(
    "card-title",
    "ps-lg-5",
    "pt-2",
    "fw-bold",
    "fs-3",
    "fs-lg-1"
  );
  titleCard.textContent = postArgument.title;
  return titleCard;
};

/*sección de tags*/
const createTagsSection = (postArgument) => {
  const tagsWarapper = document.createElement("div");
  const tagslist = document.createElement("ul");
  tagslist.classList.add("d-flex", "list-unstyled");
  tagsWarapper.classList.add("ps-lg-5", "mb-2");
  let postTags = postArgument.tags;
  postTags.forEach((tag) => {
    let listElement = document.createElement("li");
    listElement.classList.add("p-0");
    let anchorTag = document.createElement("a");
    anchorTag.classList.add(
      "text-decoration-none",
      "text-dark",
      "btn",
      "fourteen-font-size",
      "ps-1"
    );
    anchorTag.setAttribute("href", "#");
    anchorTag.setAttribute("type", "button");
    anchorTag.textContent = `#${tag}`;
    listElement.append(anchorTag);
    tagslist.append(listElement);
  });
  tagsWarapper.append(tagslist);
  return tagsWarapper;
};

/*sección de meta*/

const createMetaSection = (emojisArray, post) => {
  let metaWrapper = document.createElement("div");
  metaWrapper.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "ps-lg-5"
  );
  let postInteractions = document.createElement("div");
  postInteractions.classList.add("d-flex");
  let postUtilities = document.createElement("div");
  postUtilities.classList.add("d-flex", "gap-2", "pe-lg-3");
  let totalReactions = document.createElement("p");
  totalReactions.textContent = `${post.reactions} reactions`;
  totalReactions.classList.add(
    "fourteen-font-size",
    "mb-0",
    "ms-2",
    "text-dark",
    "d-none",
    "d-md-block"
  );
  let commentsIcon = document.createElement("img");
  commentsIcon.setAttribute("src", "../../assets/comment.svg");
  commentsIcon.classList.add("ms-2");
  let totalComments = document.createElement("p");
  totalComments.textContent = `${post.comments} comments`;
  totalComments.classList.add("m-0", "fourteen-font-size");
  let totalReadTime = document.createElement("p");
  totalReadTime.textContent = `${post.readTime} min read`;
  totalReadTime.classList.add("m-0", "fourteen-font-size");
  let bookMarkIcon = document.createElement("img");
  bookMarkIcon.setAttribute("src", "../../assets/bookmark.svg");
  let emojiWrapper = document.createElement("div");
  let emojiList = document.createElement("ul");
  emojiList.classList.add("d-flex", "list-unstyled", "m-0");
  emojisArray.forEach((emoji) => {
    let emojiElement = document.createElement("li");
    let emojiImg = document.createElement("img");
    emojiImg.classList.add("emojis-size");
    emojiImg.setAttribute("src", emoji);
    emojiElement.append(emojiImg);
    emojiList.append(emojiElement);
    emojiWrapper.append(emojiList);
  });
  postInteractions.append(
    emojiWrapper,
    totalReactions,
    commentsIcon,
    totalComments
  );
  postUtilities.append(totalReadTime, bookMarkIcon);
  metaWrapper.append(postInteractions, postUtilities);
  return metaWrapper;
};

/*cuerpo de la card*/

let createCardBody = (user, title, tags, emojis) => {
  let bodyCard = document.createElement("div");
  bodyCard.classList.add("card-body", "p-3", "p-lg-4");
  bodyCard.append(user, title, tags, emojis);
  return bodyCard;
};

export {
  userData,
  postTitle,
  createTagsSection,
  createMetaSection,
  createCardBody,
};
