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
    const { item } = this.props;

    return (
      <li>
        <div>{item.get('category')}</div>
        <div>{item.get('price')}</div>
        <div>{item.get('date').toLocaleDateString()}</div>
        <div>{item.get('type')}</div>
        <div>{item.get('description')}</div>
        <div>{item.get('currency')}</div>
        <button  onClick={this.handleDeleteItem}>delete</button>
      </li>
    );
  }
}

export { NotesListItem };
