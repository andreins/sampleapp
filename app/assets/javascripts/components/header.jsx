import React from "react";

const displayName = "Header";
const propTypes = {

};

export default class Header extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          Sample App
          <nav>
            <ul className ="nav navbar-nav navbar-right">
              <li>Home</li>
              <li>Help</li>
              <li>Log In</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

Header.displayName = displayName;
Header.propTypes = propTypes;
