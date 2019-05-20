import React from 'react';
import PropTypes from 'prop-types';

const StepGuide = props => {
  return (
    <>
      {props.step < 4 && props.step > 0 ? (
        <section className="m-element-spacing s-field-padding">
          <h1 className="m-main-color">Step {props.step}</h1>
          <h3 className="m-main-color">{props.stepDesc}</h3>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

StepGuide.propTypes = {
  name: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  stepDesc: PropTypes.string.isRequired
};

export default StepGuide;
