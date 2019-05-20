import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = props => {
  return (
    <header
      className={`s-title-padding 
        ${
          props.classEnable === 'first'
            ? 's-section-header'
            : 's-section-header-other'
        }
      `}>
      <h2 className="text-center">{props.sectionText}</h2>
    </header>
  );
};

SectionHeader.propTypes = {
  sectionText: PropTypes.string.isRequired
};

export default SectionHeader;
