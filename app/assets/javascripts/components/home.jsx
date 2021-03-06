import React from "react";

const displayName = "Home";

const propTypes = {
  signUp: React.PropTypes.string.isRequired
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div className="center jumbotron">
      <h1>Welcome to the Sample App</h1>
      <h2>
        This is the home page for the&nbsp;
        <a href="http://www.railstutorial.org/">Ruby on Rails Tutorial</a>&nbsp;
        sample application.
        </h2>
        <a href ={this.props.signUp}>
          <div className="btn btn-lg btn-primary"> Sign up now! </div>
        </a>
    </div>
    );
  }
}

Home.displayName = displayName;
Home.propTypes = propTypes;
