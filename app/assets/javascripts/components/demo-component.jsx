import React from "react";


const displayName = "Demo Component";
const propTypes = {
  path: React.PropTypes.string.isRequired
};

export default class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p className="helloworld">
        Hello, {this.props.path}! I am a React.js component built in ES6.
      </p>
    );
  }
}

DemoComponent.displayName = displayName;
DemoComponent.propTypes = propTypes;
