import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';

import BudgetListing from './BudgetListing';
import Certs from './Certs';
import MyDetails from './MyDetails';

class SubNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}>
              My Budgets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}>
              Certs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}>
              My Details
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col md="12">
                <BudgetListing />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col md="12">
                <Certs />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col md="12">
                <MyDetails />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default SubNav;
