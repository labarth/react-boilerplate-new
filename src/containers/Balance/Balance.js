import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { totalBalanceSelector } from 'selectors/rootSelector';

const mapStateToProps = (state) => ({
  totalBalance: totalBalanceSelector(state),
});

@connect(mapStateToProps)
class Balance extends PureComponent {
  static propTypes = {
    totalBalance: PropTypes.number.isRequired,
  };

  render() {
    return (
      <h1>{`Баланс счета: ${this.props.totalBalance} BYN`}</h1>
    );
  }
}

export { Balance };
