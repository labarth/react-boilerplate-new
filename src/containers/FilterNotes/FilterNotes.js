import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'components/List/List';
import { FilterNotesItem } from './FilterNotesItem';

const mapStateToProps = (state) => ({
  categories: state.categories,
});

@connect(mapStateToProps)
class FilterNotes extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <List>
        {this.props.categories.map((category) => (<FilterNotesItem key={category.get('label')} label={category.get('label')} />))}
      </List>
    );
  }
}

export { FilterNotes };
