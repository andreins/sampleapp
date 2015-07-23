import React from "react";

const displayName = "SignUp form";
const propTypes = {
  csrfToken: React.PropTypes.string.isRequired
};

export default class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <form acceptCharset="UTF-8" action="/users" className="new_user"
      id="new_user" method="post">
      <input name="authenticity_token" type="hidden"
       value={this.props.csrfToken} />
      <input name="utf8" type="hidden" value="&#x2713;" />
      <label htmlFor="user_name">Name</label>
      <input id="user_name" name="user[name]" type="text" />

      <label htmlFor="user_email">Email</label>
      <input id="user_email" name="user[email]" type="email" />

      <label htmlFor="user_password">Password</label>
      <input id="user_password" name="user[password]"
             type="password" />

      <label htmlFor="user_password_confirmation">Confirmation</label>
      <input id="user_password_confirmation"
             name="user[password_confirmation]" type="password" />

      <input className="btn btn-primary" name="commit" type="submit"
             value="Create my account" />
      </form>
    );
  }
}
SignUp.displayName = displayName;
SignUp.propTypes = propTypes;
