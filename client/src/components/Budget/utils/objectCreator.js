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

export const mapCategories = (listName, listArray, selectArray, clickEvent) => {
  const mapedCate = listArray.map((m, i) => {
    let chosen;
    selectArray.includes(m.name) ? (chosen = m.name) : (chosen = '');

    i++;
    return (
      <CategoryList
        key={i}
        listName={listName}
        item={m.name}
        icon={m.imgSrc}
        enveIcon={m.envelope}
        selectedCate={chosen}
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
  let tempNeeds = needsArr.map(n => n);
  let tempWants = wantsArr.map(w => w);
  let allCateArr = [...new Set([...tempNeeds, ...tempWants])];
  return allCateArr;
};
