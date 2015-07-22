import React from "react";

const displayName = "Footer";
const propTypes = {

};

export default class Footer extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {};
  }
  render() {
    return (
          <footer className="footer">
            <small>
              The <a href="http://www.railstutorial.org/">Ruby on Rails Tutorial</a>
              by <a href="http://www.michaelhartl.com/">Michael Hartl</a>
            </small>
            <nav>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li><a href="http://news.railstutorial.org/">News</a></li>
              </ul>
            </nav>
          </footer>
        );
      }
    }
Footer.displayName = displayName;
Footer.propTypes = propTypes;
