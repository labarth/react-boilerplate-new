import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'components/Checkbox/Checkbox';

class FilterNotesItem extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <li>
        <Checkbox
          label={this.props.label}
        />
      </li>
    );
  }
}

export { FilterNotesItem };
