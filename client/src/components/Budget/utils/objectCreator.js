import React from 'react';
import CategoryList from '../components/categoryList';

// setCategory.js

export const objCateList = (customArray, icons, enveIcons) => {
  let createdObjects = customArray.map((c, i) => {
    let newObj = [];
    i++;
    newObj.name = c;
    newObj.imgSrc = icons[i - 1];
    newObj.envelope = enveIcons[i - 1];
    return newObj;
  });

  return createdObjects;
};

export const mapCategories = (listName, listArray, clickEvent) => {
  const mapedCate = listArray.map((m, i) => {
    i++;
    return (
      <CategoryList
        key={i}
        listName={listName}
        item={m.name}
        icon={m.imgSrc}
        enveIcon={m.envelope}
        handleCateClicked={clickEvent}
      />
    );
  });
  return mapedCate;
};

// Budget.js

export const objSingleCate = (category, icon, enveIcon) => {
  const newObj = {
    name: category,
    imgSrc: icon,
    envelope: enveIcon
  };

  return newObj;
};

// setMoney.js

export const mapAllCates = (needsArr, wantsArr) => {
  let allCateArr = [];

  if (needsArr.length !== 0 && wantsArr.length !== 0) {
    for (let i = 0; i < wantsArr.length; i++) {
      needsArr.push(wantsArr[i]);
    }
    allCateArr = needsArr;
  } else if (needsArr.length !== 0 && wantsArr.length === 0) {
    allCateArr = needsArr;
  } else if (needsArr.length === 0 && wantsArr.length !== 0) {
    allCateArr = wantsArr;
  }

  return allCateArr;
};
