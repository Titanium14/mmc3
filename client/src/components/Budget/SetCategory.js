import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, CardHeader, ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import nextarrow from '../../assets/budget/next-arrow.png';

import CategoryList from './CategoryList';
import CreateButton from './CreateButton';
import { objCustomOptions } from '../Utils/objectGenerator';

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
      needsObj: objCustomOptions(needsCate),
      wantsObj: objCustomOptions(wantsCate)
    });
  }

  render() {
    const needsList = this.state.needsObj.map(n => (
      <CategoryList key={n.id} id={n.id} item={n.name} />
    ));
    const wantsList = this.state.wantsObj.map(w => (
      <CategoryList key={w.id} id={w.id} item={w.name} />
    ));
    return (
      <>
        <FormGroup>
          <Row>
            <Col />
            <Col lg={5}>
              <Card>
                <CardHeader>Needs</CardHeader>
                <ListGroup>{needsList}</ListGroup>
              </Card>
            </Col>
            <Col lg={5}>
              <Card>
                <CardHeader>Wants</CardHeader>
                <ListGroup>{wantsList}</ListGroup>
              </Card>
            </Col>
            <Col />
          </Row>
        </FormGroup>
        <Row className="m-element-spacing">
          <Col lg={2}>
            <CreateButton
              name="Back"
              img={nextarrow}
              handleBtn={this.props.handleBack}
            />
          </Col>
          <Col lg={8} />
          <Col lg={2}>
            <CreateButton
              name="Next"
              img={nextarrow}
              handleBtn={this.props.handleNext}
            />
          </Col>
        </Row>
      </>
    );
  }
}

SetCategory.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired
};

export default SetCategory;
