import React, { Component } from 'react';
import styled from 'styled-components';
import { NotesList } from 'containers/Notes/NotesList';
import { AddNotesForm } from 'containers/AddNotes/AddNotesForm';
import { AddCategories } from 'containers/AddCategories/AddCategories';
import { Balance } from 'containers/Balance/Balance';

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
        <AddCategories />
        <div />
        <AddNotesForm />
        <Balance />
      </StyledApp>
    );
  }
}

export { App };
