import React, { Component } from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';

import coin from './assets/coin.png';
import envelope from './assets/envelope.png';

import CreateButton from './createButton';

class SetMoney extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinStack: 20
    };

    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick(e) {
    e.preventDefault();
  }

  render() {
    let coinArray = [];
    let envelopeArray = [];
    let xPos = 0;
    let yPos = 0;

    for (let i = 0; i < this.state.coinStack; i++) {
      coinArray.unshift(
        <img
          style={{ top: yPos, left: xPos }}
          className="m-responsive-img s-coin-sizing"
          key={i}
          src={coin}
          alt="Stacking coins"
        />
      );
      yPos += 20;
      xPos = Math.floor(Math.random() * 21) - 10;
    }

    for (let i = 0; i < 9; i++) {
      envelopeArray.push(
        <img style={{ width: '33.3%' }} key={i} src={envelope} alt="..." />
      );
    }

    return (
      <>
        <FormGroup>
          <Row style={{ wordBreak: 'break-all' }}>
            <Col lg={2}>
              <div style={{ position: 'relative', height: yPos + 100 }}>
                {coinArray}
              </div>
              <h2 className="m-main-color text-center">Remaining</h2>
              <Input
                type="text"
                name="income"
                id="textIncome"
                placeholder="in Euro (€)"
              />
            </Col>
            <Col lg={2}>
              <img
                className="m-img-center"
                src="https://placeholdit.imgix.net/~text?txtsize=16&txt=image&w=100&h=100"
                alt="..."
              />
              <Input
                type="text"
                name="income"
                id="textIncome"
                placeholder="in Euro (€)"
              />
              <div className="text-center m-element-spacing-top">
                <CreateButton
                  className=""
                  name="Add"
                  handleBtn={this.onAddClick.bind(this)}
                />
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                <Col />
                <Col lg={9}>{envelopeArray}</Col>
                <Col />
              </Row>
            </Col>
          </Row>
        </FormGroup>
      </>
    );
  }
}

export default SetMoney;
