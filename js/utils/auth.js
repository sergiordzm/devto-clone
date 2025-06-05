let token = localStorage.getItem("token");

const tokenExists = () => {
  return localStorage.getItem("token") !== null;
};
export { tokenExists };
