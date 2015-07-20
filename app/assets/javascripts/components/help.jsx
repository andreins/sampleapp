import React from "react";

const displayName = "About";
const propTypes = {

};

export default class About extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
      <h1>Help</h1>
      <p>
        Get help on the Ruby on Rails Tutorial at the&nbsp;
        <a href="http://www.railstutorial.org/#help">Rails Tutorial help section</a>.
        To get help on this sample app, see the&nbsp;
        <a href="http://www.railstutorial.org/book"><em>Ruby on Rails Tutorial</em>
        book</a>.
      </p>
      </div>
    );
  }
}

About.displayName = displayName;
About.propTypes = propTypes;
