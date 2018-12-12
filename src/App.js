import React, { Component } from 'react';
import { NotesList } from 'containers/NotesList';

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <NotesList />
    )
  }
}

export { App }
