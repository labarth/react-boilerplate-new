import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { actions } from 'redux/notes/actions';
import { connect } from 'react-redux';
import { List } from 'components/List/List';
import { NotesListItem } from './NotesListItem';


const mapDispatchToProps = (dispatch) => ({
  deleteNote: (id) => dispatch(actions.deleteNote(id)),
});

const mapStateToProps = (state) => ({
  notes: state.notes,
});


@connect(mapStateToProps, mapDispatchToProps)
class NotesList extends PureComponent {
  static propTypes = {
    deleteNote: PropTypes.func.isRequired,
    notes: PropTypes.instanceOf(Immutable.List).isRequired,
  };

  handleDeleteItem = (id) => this.props.deleteNote({ id });

  render() {
    const { notes } = this.props;

    return (
      notes.size
        ? (
          <List>
            {this.props.notes.map((item) => (
              <NotesListItem
                key={item.get('id')}
                item={item}
                onDeleteItem={this.handleDeleteItem}
              />))}
          </List>
        )
        : <div>empty lists</div>
    );
  }
}

export { NotesList };
