import React from 'react';
import { Row, Col, CardGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import './Home.css';

import Welcome from './components/welcome';
import SectionHeader from './components/sectionHeader';
import Basics from './components/basics';
import FeatureCard from './components/featureCard';

import { creationImg, stepImg, visualImg } from './utils/exportImages';

const Home = props => {
  return (
    <>
      <Welcome
        imgSrc="http://mmc9.herokuapp.com/assets/app-bg2-60281578cc7e32acb5410e6b03808aa92d841fba59e94ef0db56b091368c8ab7.jpg"
        title="Welcome to My Money Counts"
        subtitle="Helping you manage your money better"
        winWidth={props.winWidth}
      />
      <Row className="m-element-spacing-bottom" noGutters>
        <Col />
        <Col md={10}>
          <SectionHeader
            classEnable="first"
            sectionText="The basics provided by My Money Counts"
          />
        </Col>
        <Col />
      </Row>
      <Row noGutters>
        <Col />
        <Col md={10}>
          <Row noGutters>
            <Basics
              imgSrc="http://mmc9.herokuapp.com/assets/intro015-55b39aba01599d0ab9ebd90bf261ccecf527a51d27c69c5f979ccef5f09f4bfd.png"
              header="See where your money goes"
              paragraph="Visualize your spending habits so you know exactly what's going in, and out."
            />
            <Basics
              imgSrc="http://mmc9.herokuapp.com/assets/intro02-09bda49eb5d629fc9c1a4126f780cd4e3969d2e7f482c5bb08c80b959bb1c03f.png"
              header="Get ahead"
              paragraph="Create budgets for the coming weeks. You can even access old budgets too!"
            />
            <Basics
              imgSrc="http://mmc9.herokuapp.com/assets/intro032-76102ab64507437078ad57292cbd92a8e2332b30fdac1a381720fdd5af7b7b3f.png"
              header="Access Anywhere"
              paragraph="Use and interact with My Money Counts anywhere using any device."
            />
          </Row>
        </Col>
        <Col />
      </Row>
      <hr />
      <Row className="m-element-spacing-bottom" noGutters>
        <Col />
        <Col md={10}>
          <SectionHeader
            classEnable="other"
            sectionText="What can I do with My Money Counts?"
          />
        </Col>
        <Col />
      </Row>
      <Row noGutters>
        <Col />
        <Col lg={10}>
          <CardGroup>
            <FeatureCard
              imgSrc={creationImg}
              title="Budget Creation - Made Easier!"
              text="Enjoy a seamless and smooth experience like never before. Put your frustrations with your budgets away and enjoy creating a simple budget on My Money Counts!"
              winWidth={props.winWidth}
            />
            <FeatureCard
              imgSrc={stepImg}
              title="Step-by-Step Process"
              text="When creating a budget, we'll walk you through the process step-by-step. Simply follow along and you'll be on your way to creating your own budgets!"
              winWidth={props.winWidth}
            />
            <FeatureCard
              imgSrc={visualImg}
              title="Rich Visuals"
              text="When you're finished making your budget, don't worry. You won't be staring at just numbers in black-and-white text. You'll have the opportunity to view your budget overview with the rich visualisations offered."
              winWidth={props.winWidth}
            />
          </CardGroup>
        </Col>
        <Col />
      </Row>
    </>
  );
};

Home.propTypes = {
  winWidth: PropTypes.number.isRequired
};

export default Home;
