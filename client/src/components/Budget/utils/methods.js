import React from 'react';
import { Col } from 'reactstrap';
import Envelope from '../components/envelope';
import CreateButton from '../components/createButton';

import { savingsIcon, savingsEnve } from './exportImages';

// Budget.js

export const generateNavBtns = (stepNo, navBtn, submitBtn) => (
  <>
    {stepNo !== 1 ? (
      <Col lg={1}>
        <CreateButton name="Back" handleBtn={navBtn} />
      </Col>
    ) : (
      <></>
    )}
    <Col lg={4} />
    <Col lg={1}>
      {stepNo < 3 ? (
        <CreateButton name="Next" handleBtn={navBtn} />
      ) : (
        <CreateButton name="Submit" handleBtn={submitBtn} />
      )}
    </Col>
  </>
);

// setPeriod.js

export const setIncome = propIncome => {
  let income;
  if (propIncome === 0) {
    income = '';
  } else {
    income = propIncome;
  }
  return income;
};

// setMoney.js

export const generateCoins = (numCoins, img, xArray, yArray) => {
  let coinArray = [];
  for (let i = 0; i < numCoins; i++) {
    coinArray.push(
      <img
        style={{ top: yArray[i], left: xArray[i] }}
        className="m-responsive-img s-coin-sizing"
        key={i}
        src={img}
        alt="Stacking coins"
      />
    );
  }
  return [coinArray, yArray[0]];
};

export const generatePositions = numCoins => {
  let tempX, tempY;
  let xArray = [];
  let yArray = [];
  for (let i = 0; i < numCoins; i++) {
    tempX = i === 0 ? 0 : Math.floor(Math.random() * 21) - 10;
    tempY = i * 20;
    xArray.unshift(tempX);
    yArray.unshift(tempY);
  }
  return [xArray, yArray];
};

export const generateIconsEnves = (
  toGenerate,
  needsArray,
  wantsArray,
  inputArray
) => {
  let generatedArray = [];
  let i, ii;
  for (i = 0; i < needsArray.length; i++) {
    toGenerate === 'Icon'
      ? generatedArray.push(needsArray[i].imgSrc)
      : generatedArray.push(
        <Envelope
          key={i}
          enveIcon={needsArray[i].envelope}
          allocate={inputArray[i]}
        />
      );
  }
  for (ii = 0; ii < wantsArray.length; ii++) {
    toGenerate === 'Icon'
      ? generatedArray.push(wantsArray[ii].imgSrc)
      : generatedArray.push(
        <Envelope
          key={ii + i}
          enveIcon={wantsArray[ii].envelope}
          allocate={inputArray[ii + i]}
        />
      );
  }
  toGenerate === 'Icon'
    ? generatedArray.push(savingsIcon)
    : generatedArray.push(
      <Envelope
        key={ii + i}
        enveIcon={savingsEnve}
        allocate={inputArray[ii + i]}
      />
    );
  return generatedArray;
};
