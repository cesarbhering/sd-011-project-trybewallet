import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          onChange={ this.handleChange }
          name="email"
          value={ email }
          placeholder="Digite seu email"
        />
        <input
          data-testid="password-input"
          onChange={ this.handleChange }
          type="password"
          name="password"
          value={ password }
          placeholder="Digite sua senha"
        />
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}
