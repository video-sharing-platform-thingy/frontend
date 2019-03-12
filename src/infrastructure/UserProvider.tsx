import React, { Component, createContext } from 'react';

export const UserContext = createContext(null)

export default class extends Component {
  state = {
    user: null,
    setUser: (user) => this.setState({ user })
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
