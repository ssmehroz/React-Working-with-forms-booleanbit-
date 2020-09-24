import React, { Component } from "react";

class Controlled extends Component {
  state = {
    name: " ",
    lastname: " ",
  };

  handleNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      lastname: event.target.value,
    });
  };

  onshandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onshandler}>
          <div className="form_element">
            <label>Enter Name</label>
            <input
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>
          <div className="form_element">
            <label>Enter LastName</label>
            <input
              type="text"
              onChange={this.handleLastNameChange}
              value={this.state.lastname}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default Controlled;
