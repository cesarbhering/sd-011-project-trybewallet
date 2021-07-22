import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header className="container-fluid walletHeader">
        <img className="headerImg" src="/login.png" alt="Icone de uma carteira laranja" />
        <div className="informations">
          <div>
            Email:
            <span data-testid="email-field">{ ` ${email}` }</span>
          </div>
          <div>
            Despesas Totais:
            <span data-testid="header-currency-field">{ ` ${'BRL'}` }</span>
            <span data-testid="total-field">
              { total }
            </span>
          </div>
          <div />
        </div>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
