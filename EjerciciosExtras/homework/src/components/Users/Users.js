import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../actions/index";
import "./Users.css";

export class Users extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {this.props.users &&
          this.props.users.map((u) => (
            <tr>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>
                <Link to={`/users/${u.id}/posts`} className="button">
                  Posts
                </Link>
              </td>
            </tr>
          ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
