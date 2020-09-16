import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  state = {
    users: [],
  };

  renderUsersList = () => {
    return this.props.users.map((user) => {
      return <li key={user.username}>{user.username}</li>;
    });
  };

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsersList()}
          <br></br>
          Total Users: {this.props.userCount}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
