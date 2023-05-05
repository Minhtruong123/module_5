import React, { useEffect, useState } from "react";
import * as blogService from "../service/blog_service";
import { Link } from "react-router-dom";

function List() {
  const [listPost, setListPost] = useState([]);
  const [post, setPost] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const result = await blogService.findAll();
      setListPost(result);
    };
    fetchApi();
  }, []);
  const handleDeletePost = async (id) => {
    const result2 = await blogService.findById(id);
    setPost(result2);
  };

  const handleDelete = async () => {
    await blogService.deletePost(post.id);
    const result3 = await blogService.findAll();
    setListPost(result3);
  };

  return (
    <>
      <h1>List Posts</h1>
      <Link className="btn btn-primary" to={"/create"}>
        Create new post
      </Link>
      <table className="table table-border table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>TIME</th>
            <th colSpan={2}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {listPost.map((post, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.updatedAt}</td>
              <td>
                <Link to={`/edit/${post.id}`} className="btn btn-primary">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Do you want to delete this post ?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => handleDelete()}
                data-bs-dismiss="modal"
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
