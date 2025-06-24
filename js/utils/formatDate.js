import { months } from "./constants.js";

let formatDate = (post) => {
  let date = new Date(post.date);
  let month = months[date.getMonth()].slice(0, 3);
  let year = date.getFullYear().toString().slice(2);
  console.log(year);
  let day = date.getDate();
  let fullDate = `${month} ${day} '${year}`;
  return fullDate;
};

export { formatDate };
