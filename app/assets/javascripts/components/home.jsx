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
     <body>
       <h1>Sample App</h1>
       <p>
         This is the home page for the&nbsp;
         <a href="http://www.railstutorial.org/">Ruby on Rails Tutorial</a>&nbsp;
         sample application.
       </p>
     </body>
    );
  }
}

Home.displayName = displayName;
Home.propTypes = propTypes;
