import React from "react";

const displayName = "About";
const propTypes = {
  path: React.PropTypes.string.isRequired
};

export default class About extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <html>
      <h1>Help</h1>
      <p>
        Get help on the Ruby on Rails Tutorial at the {this.props.path}&nbsp;
        <a href="http://www.railstutorial.org/#help">Rails Tutorial help section</a>.
        To get help on this sample app, see the&nbsp;
        <a href="http://www.railstutorial.org/book"><em>Ruby on Rails Tutorial</em>
        book</a>.
      </p>
      </html>
    );
  }
}

About.displayName = displayName;
About.propTypes = propTypes;
