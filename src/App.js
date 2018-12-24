import React, { Component } from 'react';
import { NotesList } from 'containers/Notes/NotesList';
import { AddNotesForm } from 'containers/AddNotes/AddNotesForm';
import { AddCategories } from 'containers/AddCategories/AddCategories';
import { Balance } from 'containers/Balance/Balance';
import { Page } from 'components/Layout/Page';
import { Header } from 'components/Layout/Header';
import { Footer } from 'components/Layout/Footer';
import { Content } from 'components/Layout/Content';
import { Section } from 'components/Layout/Section';


class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Page>
        <Header>header</Header>
        <Content>
          <Section>
            <NotesList />
          </Section>
          <Section>
            <AddCategories />
            <AddNotesForm />
          </Section>
        </Content>
        <Footer>
          <Balance />
        </Footer>
      </Page>
    );
  }
}

export { App };