import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { actions } from 'redux/notes/actions';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { List } from 'components/List/List';
import { NotesListItem } from './NotesListItem';


const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(actions.addNote(note)),
  deleteNote: (id) => dispatch(actions.deleteNote(id)),
})

const mapStateToProps = (state) => ({
  notes: state.notes,
})


@connect(mapStateToProps, mapDispatchToProps)
class NotesList extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  handleClick = () => {
    const note = new Map({
      id: v4(),
      price: Math.random() * 100,
      description: 'Носки',
      type: 'dec',
      currency: 'BYN',
      date: new Date(),
      category: 'Одежда'
    });

    this.props.addNote({ note });
  }

  handleDeleteItem = (id) => {
    this.props.deleteNote({ id });
  }

  render() {
    return (
      <List>
        {this.props.notes.map((item) => (
          <NotesListItem
            key={item.get('id')}
            item={item}
            onDeleteItem={this.handleDeleteItem}
          />))}
        <button onClick={this.handleClick}>okkk</button>
      </List>
    );
  }
}

export { NotesList };
