import React from "react";
const displayName = "Home";
const propTypes = {
  title: React.PropTypes.string.isRequired
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.title = this.props.title;
  }
  render() {
    return (
    <div className="center jumbotron">
      <h1>Welcome to the Sample App</h1>
      <h2>
        This is the home page for the
        <a href="http://www.railstutorial.org/">Ruby on Rails Tutorial</a>
        sample application.
        </h2>
    </div>
    );
  }
}

Home.displayName = displayName;
Home.propTypes = propTypes;
