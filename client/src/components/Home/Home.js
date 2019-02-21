import React from 'react';
import { Row, Col, CardGroup } from 'reactstrap';

import '../../styles/Home.css';

import Welcome from './Welcome';
import SectionHeader from './SectionHeader';
import Basics from './Basics';
import FeatureCard from './FeatureCard';

const Home = () => {
  return (
    <>
      <Row className="s-welcome-background" noGutters>
        <Col />
        <Col lg={10}>
          <Welcome
            imgSrc="http://mmc9.herokuapp.com/assets/app-bg2-60281578cc7e32acb5410e6b03808aa92d841fba59e94ef0db56b091368c8ab7.jpg"
            title="Welcome to My Money Counts"
            subtitle="Helping you manage your money better"
          />
        </Col>
        <Col />
      </Row>
      <Row noGutters>
        <Col />
        <Col lg={10}>
          <SectionHeader sectionText="The basics provided by My Money Counts" />
        </Col>
        <Col />
      </Row>
      <Row noGutters>
        <Col />
        <Col lg={10}>
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
      <Row noGutters>
        <Col />
        <Col lg={10}>
          <SectionHeader sectionText="What can I do with My Money Counts?" />
          <CardGroup>
            <FeatureCard
              imgSrc="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
              title="Budget Creation - Made Easier!"
              text="Enjoy a seamless and smooth experience like never before. Put your frustrations with your budgets away and enjoy creating a simple budget on My Money Counts!"
              button="Find out more"
            />
            <FeatureCard
              imgSrc="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
              title="Step-by-Step Process"
              text="When creating a budget, we'll walk you through the process step-by-step. Simply follow along and you'll be on your way to creating your own budgets!"
              button="Find out more"
            />
            <FeatureCard
              imgSrc="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
              title="Rich Visualisations"
              text="When you're finished making your budget, don't worry. You won't be staring at just numbers in black-and-white text. You'll have the opportunity to view your budget overview with the rich visualisations offered."
              button="Find out more"
            />
          </CardGroup>
        </Col>
        <Col />
      </Row>
    </>
  );
};

export default Home;
