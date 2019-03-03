import React from 'react';
import CategoryList from '../components/categoryList';

export const objCateList = (customArray, icons, enveIcons) => {
  let createdObjects = customArray.map((c, i) => {
    let newObj = [];
    i++;
    newObj.id = i;
    newObj.name = c;
    newObj.imgSrc = icons[i - 1];
    newObj.envelope = enveIcons[i - 1];
    return newObj;
  });

  return createdObjects;
};

export const mapCategories = (listName, listArray, clickEvent) => {
  const mapedCate = listArray.map(m => (
    <CategoryList
      key={m.id}
      id={m.id}
      listName={listName}
      item={m.name}
      icon={m.imgSrc}
      enveIcon={m.envelope}
      handleCateClicked={clickEvent}
    />
  ));
  return mapedCate;
};