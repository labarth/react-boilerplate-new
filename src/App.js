import React, { Component } from 'react';
import { NotesList } from 'containers/Notes/NotesList';
import styled from 'styled-components';
import { AddNotesForm } from './containers/Add/AddNotesForm';

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <StyledApp>
        <NotesList />
        <AddNotesForm />
      </StyledApp>
    );
  }
}

export { App };
