import React, { Component } from 'react';
import { NotesList } from 'containers/Notes/NotesList';
import { AddNotesForm } from 'containers/AddNotes/AddNotesForm';
import { AddCategories } from 'containers/AddCategories/AddCategories';
import { FilterNotes } from 'containers/FilterNotes/FilterNotes';
import { Balance } from 'containers/Balance/Balance';
import { Page } from 'components/Layout/Page';
import { Col } from 'components/Col/Col';
import { Row } from 'components/Row/Row';

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Page>
        <FilterNotes />
        <div style={{
          display: 'flex',
          minHeight: '100%',
          minWidth: '100%',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
        }}
        >
          <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            <Row>
              <Col>
                <NotesList />
              </Col>
              <Col>
                <AddCategories />
                <AddNotesForm />
              </Col>
            </Row>
          </div>
          <Balance />
        </div>
      </Page>
    );
  }
}

export { App };
