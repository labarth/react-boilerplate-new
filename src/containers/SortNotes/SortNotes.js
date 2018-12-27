import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SORT_DATE_ASC, SORT_DATE_DES } from 'contstants/constants';
import { sortNotesType } from 'redux/sortNotes/actions';
import { StyledArrow, StyledSort, StyledText, StyledItem } from './Styled';

const mapStateToProps = (state) => ({
  sortNotes: state.sortNotes,
});

const mapDispatchToProps = (dispatch) => ({
  sortByTypeAction: (type) => dispatch(sortNotesType(type)),
});

@connect(mapStateToProps, mapDispatchToProps)
class SortNotes extends PureComponent {
  static propTypes = {
    sortNotes: PropTypes.string.isRequired,
    sortByTypeAction: PropTypes.func.isRequired,
  };

  get actualSortType() {
    const { sortNotes } = this.props;

    if (sortNotes === SORT_DATE_DES) {
      return { type: SORT_DATE_ASC };
    }

    if (sortNotes === SORT_DATE_ASC) {
      return { type: SORT_DATE_DES };
    }

    return 'unknown type';
  }

  handleClick = () => {
    const { sortByTypeAction } = this.props;

    sortByTypeAction(this.actualSortType);
  }

  render() {
    return (
      <StyledSort>
        <StyledText>Сортировка:</StyledText>
        <StyledItem onClick={this.handleClick}>
          <StyledText>Дата</StyledText>
          <StyledArrow type={this.props.sortNotes} />
        </StyledItem>
      </StyledSort>
    );
  }
}

export { SortNotes };
