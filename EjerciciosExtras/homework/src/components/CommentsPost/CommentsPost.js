import React from "react";
import { connect } from "react-redux";
import { getAllCommentsPost } from "../../actions/index";

import "./CommentsPost.css";

export class CommentsPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCommentsPost(this.props.id);
  }

  render() {
    return (
      <div className="details">
        <h4>Comentarios del Post {this.props.id}</h4>
        {this.props.commentsPost &&
          this.props.commentsPost.map((comment) => {
            <tr>
              <td>{comment.id}</td>
              <td>{comment.title}</td>
              <td>{comment.body}</td>
            </tr>;
          })}
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    commentsPost: state.commentsPost,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllCommentsPost: (id) => dispatch(getAllCommentsPost(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPost);
