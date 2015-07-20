import React from "react";

const displayName = "Home";
const propTypes = {
  // path: React.PropTypes.string.isRequired
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
      <h1>Sample App</h1>
      <p>
        This is the home page for the
        <a href="http://www.railstutorial.org/"> Ruby on Rails Tutorial </a>
         sample application.
      </p>
      </div>
    );
  }
}

Home.displayName = displayName;
Home.propTypes = propTypes;
