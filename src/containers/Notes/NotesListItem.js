import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

class NotesListItem extends PureComponent {
  static propTypes = {
    item: PropTypes.instanceOf(Map),
    onDeleteItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    item: Map(),
  };

  handleDeleteItem = () => {
    const id = this.props.item.get('id');
    this.props.onDeleteItem(id);
  }

  render() {
    const item = this.props.item.toJS();

    return (
      <li>
        <div>{item.category}</div>
        <div>{item.price}</div>
        <div>{item.date.toLocaleDateString()}</div>
        <div>{item.type}</div>
        <div>{item.description}</div>
        <div>{item.currency}</div>
        <button  onClick={this.handleDeleteItem}>delete</button>
      </li>
    );
  }
}

export { NotesListItem };
