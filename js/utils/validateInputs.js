/* regresa (2) [false, false]*/

const validateInputs = (inputs) => {
  let inputsArray = [];
  inputs.forEach((element) => {
    let elemenContent = element.value.trim();
    inputsArray.push(Boolean(elemenContent));
  });
  return inputsArray;
};

export { validateInputs };
