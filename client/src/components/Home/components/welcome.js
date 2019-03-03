import React from 'react';
import PropTypes from 'prop-types';

const Welcome = props => {
  return (
    <section>
      <h1 className="s-text-color text-center">{props.title}</h1>
      <h3 className="s-text-color m-light-title text-center">
        {props.subtitle}
      </h3>
      <img
        className="m-responsive-img m-img-center m-element-spacing-top m-element-spacing-bottom"
        src={props.imgSrc}
        alt="..."
      />
    </section>
  );
};

Welcome.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Welcome;
