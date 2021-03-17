import React, {Component} from 'react';

const name = (
  <input
    type="text"
    placeholder="Name User"
    minLength="10"
    maxLength="20"
  />
);

const email = (
  <input
    type="email"
    placeholder="Name User"
    minLength="10"
    maxLength="20"
    required
  />
);


export default class Form extends Component {
  render() {
    return (
      <form>
        {name}
        {email}
      </form>
    );
  }
}