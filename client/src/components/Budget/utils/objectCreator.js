export const objCustomOptions = customArray => {
  let createdObjects = customArray.map((r, i) => {
    let newObj = [];
    i++;
    newObj.id = i;
    newObj.name = r;
    return newObj;
  });
  return createdObjects;
};
