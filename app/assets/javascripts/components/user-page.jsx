import React from "react";
const displayName = "User";

const propTypes = {
  userName: React.PropTypes.string.isRequired,
  userEmail: React.PropTypes.string.isRequired
};

export default class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1>
      {this.props.userName}, {this.props.userEmail}
      </h1>
    );
  }
}

User.displayName = displayName;
User.propTypes = propTypes;
