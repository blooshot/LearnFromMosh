import React, { Component } from "react";
import http from "@/services/httpService";
import config from "@/services/config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Posts extends Component {
  state = {
    posts: [],
    sortColumn: { path: "title", order: "asc" },
    pageSize: 10,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data } = await http.get(config.postsEndPoint);

    this.setState({ posts: data });
  }

  handleAdd = async () => {
    const obj = { title: "mahTitle", body: "mahBody" };
    const { data: post } = await http.post(config.postsEndPoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
    // console.log(post);
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    const { data } = await http.put(config.postsEndPoint + "/" + post.id, post);
    // axios.put(`${config.postsEndPoint}/${post.id}`, { title: post.title });

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };

    this.setState({ posts });
    // console.log(post);
  };

  handleDelete = async (postID) => {
    const originalPost = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== postID.id);
    this.setState({ posts });

    try {
      await http.delete(`s${config.postsEndPoint}/${postID.id}`);
    } catch (ex) {
      //we only get ex.request and ex.response
      // Expected Error Handling
      if (ex.response && ex.response.status === 404) {
        alert("Post already deleted, not found on server");
      } /*  else {
      // interceptor mein se ye error msg bhejenge
        console.log("Logging the error", ex);
        alert("unexpected error occured");
      } */
      this.setState({ posts: originalPost });
    }
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <button className="btn btn-warning" onClick={this.handleAdd}>
          Add new
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info text-white"
                    onClick={() => {
                      this.handleUpdate(post);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.handleDelete(post);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;
