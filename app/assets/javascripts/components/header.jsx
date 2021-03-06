import React from "react";

const displayName = "Header";
const propTypes = {
  homePath: React.PropTypes.string.isRequired,
  helpPath: React.PropTypes.string.isRequired,
  loginPath: React.PropTypes.string.isRequired
};

export default class Header extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="navbar navbar-fixed-top navbar-inverse">
        <a href = {this.props.homePath}>
          Sample App</a>
          <nav>
            <ul className ="nav navbar-nav navbar-right">
              <li><a href={this.props.homePath}>Home</a></li>
              <li><a href={this.props.helpPath}>Help</a></li>
              <li><a href="#">Log In</a></li>
            </ul>
          </nav>
      </header>
    );
  }
}

Header.displayName = displayName;
Header.propTypes = propTypes;
