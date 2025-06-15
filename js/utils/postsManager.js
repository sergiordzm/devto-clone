let getAllPosts = async () => {
  let response = await fetch(
    "https://devto-posts-default-rtdb.firebaseio.com/posts.json"
  );
  let allData = await response.json();
  console.log(allData);
  let keys = Object.keys(allData);
  let arrayKeys = keys.map((key) => ({ id: key, ...allData[key] }));
  return arrayKeys;
};

export { getAllPosts };
