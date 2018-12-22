import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';

const mapStateToProps = (state) => ({
  notes: state.notes,
});

@connect(mapStateToProps)
class Balance extends PureComponent {
  static propTypes = {
    notes: PropTypes.instanceOf(List).isRequired,
  };

  render() {
    const { notes } = this.props;
    let startBalance = 0;

    notes.forEach((item) => {
      if (item.get('isInc')) {
        startBalance += Number(item.get('price'));
      } else {
        startBalance += Number(item.get('price') * -1);
      }
    });

    return (
      <h1>{`Баланс счета: ${startBalance} BYN`}</h1>
    );
  }
}

export { Balance };
