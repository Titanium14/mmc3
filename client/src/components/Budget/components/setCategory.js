import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, CardHeader, ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import CategoryList from './categoryList';
import { objCustomOptions } from '../utils/objectCreator';

import groceries from './assets/groceries.png';
import travel from './assets/travel.png';
import bills from './assets/bills.png';
import phone from './assets/phone.png';
import savings from './assets/savings.png';
import lunch from './assets/lunch.png';
import gifts from './assets/gifts.png';
import shows from './assets/shows.png';
import activities from './assets/activities.png';
import clothes from './assets/clothes.png';
import games from './assets/games.png';
import holiday from './assets/holiday.png';
import cinema from './assets/cinema.png';
import takeout from './assets/take-out.png';

const imageNeedsArray = [
  groceries,
  travel,
  bills,
  phone,
  savings,
  lunch,
  gifts
];

const imageWantsArray = [
  shows,
  activities,
  clothes,
  games,
  holiday,
  cinema,
  takeout
];

class SetCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      needsObj: [],
      wantsObj: []
    };
  }

  componentDidMount() {
    const needsCate = [
      'Groceries',
      'Travel',
      'Bills',
      'Phone',
      'Savings',
      'Lunch',
      'Gifts'
    ];
    const wantsCate = [
      'Shows',
      'Activities',
      'Clothes',
      'Games',
      'Holiday',
      'Cinema',
      'Take-out'
    ];
    this.setState({
      needsObj: objCustomOptions(needsCate, imageNeedsArray),
      wantsObj: objCustomOptions(wantsCate, imageWantsArray)
    });
  }

  render() {
    const needsList = this.state.needsObj.map(n => (
      <CategoryList
        key={n.id}
        id={n.id}
        listName="Needs"
        item={n.name}
        icon={n.imgSrc}
        handleCateClicked={this.props.handleCateClicked}
      />
    ));
    const wantsList = this.state.wantsObj.map(w => (
      <CategoryList
        key={w.id}
        id={w.id}
        listName="Wants"
        item={w.name}
        icon={w.imgSrc}
        handleCateClicked={this.props.handleCateClicked}
      />
    ));

    return (
      <>
        <FormGroup>
          <Row>
            <Col />
            <Col lg={5}>
              <Card>
                <CardHeader tag="h2">Needs</CardHeader>
                <ListGroup>{needsList}</ListGroup>
              </Card>
            </Col>
            <Col lg={5}>
              <Card>
                <CardHeader tag="h2">Wants</CardHeader>
                <ListGroup>{wantsList}</ListGroup>
              </Card>
            </Col>
            <Col />
          </Row>
        </FormGroup>
      </>
    );
  }
}

SetCategory.propTypes = {
  handleCateClicked: PropTypes.func.isRequired
};

export default SetCategory;
