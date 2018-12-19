import React from 'react';
import PropTypes from 'prop-types';

export const List = (props) => <ul>{props.children}</ul>;

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};
