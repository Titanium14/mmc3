import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, CardHeader, ListGroup } from 'reactstrap';

import CategoryList from './categoryList';
import { objCustomOptions } from '../utils/objectCreator';

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

export default SetCategory;
