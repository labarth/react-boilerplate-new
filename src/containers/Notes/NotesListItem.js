import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Row } from 'components/Row/Row';
import { Col } from 'components/Col/Col';
import { StyledItem, StyledCol } from './Styled';

class NotesListItem extends PureComponent {
  static propTypes = {
    item: PropTypes.instanceOf(Map),
    onDeleteItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    item: Map(),
  };

  handleDeleteItem = () => {
    const id = this.props.item.get('id');
    this.props.onDeleteItem(id);
  }

  render() {
    const item = this.props.item.toJS();

    return (
      <StyledItem isInc={item.isInc}>
        <Row>
          <Col><StyledCol>Категория:</StyledCol></Col>
          <Col>{item.category}</Col>
        </Row>
        <Row>
          <Col><StyledCol>Цена:</StyledCol></Col>
          <Col>{item.price} {item.currency}</Col>
        </Row>
        <Row>
          <Col><StyledCol>Дата: </StyledCol></Col>
          <Col>{new Date(item.date).toLocaleDateString()}</Col>
        </Row>
        <Row>
          <Col><StyledCol>Описание:</StyledCol></Col>
          <Col>{item.description}</Col>
        </Row>
        <button onClick={this.handleDeleteItem}>delete</button>
      </StyledItem>
    );
  }
}

export { NotesListItem };
