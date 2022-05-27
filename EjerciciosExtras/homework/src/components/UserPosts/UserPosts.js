import React from "react";
import { connect } from "react-redux";
import "./UserPosts.css";
import { getAllUserPosts } from "../../actions/index";
import CommentsPost from "../CommentsPost/CommentsPost";

export class UserPosts extends React.Component {
  componentDidMount() {
    this.props.getAllUserPosts(this.props.match.params.id);
  }

  render() {
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {/*userid*/}</h4>
        {this.props.userPosts &&
          this.props.userPosts.map((post) => (
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <ComentsPost id={post.id} />
              </td>
            </tr>
          ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userPosts: state.userPosts,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserPosts: () => dispatch(getAllUserPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
