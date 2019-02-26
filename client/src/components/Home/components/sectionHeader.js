import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = props => {
  return (
    <header className="s-section-header">
      <h2 className="text-center">{props.sectionText}</h2>
    </header>
  );
};

SectionHeader.propTypes = {
  sectionText: PropTypes.string.isRequired
};

export default SectionHeader;
