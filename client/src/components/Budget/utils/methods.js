import React from 'react';
import { Col } from 'reactstrap';
import Envelope from '../components/envelope';
import CreateButton from '../components/createButton';

// Budget.js

export const generateNavBtns = (stepNo, navBtn, submitBtn, usedIncome) => (
  <>
    {stepNo !== 1 ? (
      <Col lg={3} md={3} sm={3} xs={4}>
        <CreateButton name="Back" handleBtn={navBtn} />
      </Col>
    ) : (
      <></>
    )}
    <Col lg={2} md={2} sm={4} xs={2} />
    <Col lg={3} md={3} sm={3} xs={4}>
      {stepNo < 3 ? (
        <CreateButton name="Next" handleBtn={navBtn} />
      ) : (
        <CreateButton
          name="Submit"
          handleBtn={submitBtn}
          usedAll={usedIncome}
        />
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

export const generateCoins = (numCoins, img, xArray, yArray, winWidth) => {
  let coinArray = [];
  for (let i = 0; i < numCoins; i++) {
    coinArray.push(
      <img
        style={{ top: yArray[i], left: xArray[i] }}
        className={`m-responsive-img s-coin-sizing ${
          winWidth < 768 ? 's-coin-responsive' : ''
        }`}
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
  catesArr,
  incomeArray,
  winWidth
) => {
  let generatedArray = [];
  let i;
  for (i = 0; i < catesArr.length; i++) {
    toGenerate === 'Icon'
      ? generatedArray.push(catesArr[i])
      : generatedArray.push(
          <Envelope
            key={i}
            enveIcon={catesArr[i].envelope}
            allocate={incomeArray[i]}
            winWidth={winWidth}
          />
        );
  }
  return generatedArray;
};
