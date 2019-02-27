export const objCustomOptions = (customArray, imageArray) => {
  let createdObjects = customArray.map((r, i) => {
    let newObj = [];
    i++;
    newObj.id = i;
    newObj.name = r;
    newObj.imgSrc = imageArray[i - 1];
    return newObj;
  });
  return createdObjects;
};
