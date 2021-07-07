import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{`Bem vindo: ${email}`}</h4>
        <h4 data-testid="total-field">0</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
