import React, { Component } from 'react';
import styled from 'styled-components';
import { NotesList } from 'containers/Notes/NotesList';
import { AddNotesForm } from 'containers/AddNotes/AddNotesForm';
import { AddCategories } from 'containers/AddCategories/AddCategories';
import { Balance } from 'containers/Balance/Balance';
import { Page } from 'components/Layout/Page';
import { Row } from 'components/Row/Row';
import { Col } from 'components/Col/Col';
import {Scroll} from './components/Scroll/Srcoll'

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Page>
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
          }}
          >
            <Col>
              <NotesList />
            </Col>
            <Col>
              <AddCategories />
              <AddNotesForm />
            </Col>
          </div>
          <Balance />
        </div>
      </Page>
    );
  }
}

export { App };
