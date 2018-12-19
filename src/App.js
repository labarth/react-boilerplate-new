import React, { Component, Fragment } from 'react';
import { NotesList } from 'containers/Notes/NotesList';
import { AddNotesForm } from './containers/Add/AddNotesForm';

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Fragment>
        <NotesList />
        <AddNotesForm />
      </Fragment>
    );
  }
}

export { App };
