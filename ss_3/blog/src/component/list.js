import React, { useEffect, useState } from "react";
import * as blog_service from "../service/blog_service";

function List() {
  const [listPost, setListPost] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await blog_service.findAll();
      setListPost(result);
    };
    fetchApi();
  }, []);
  return (
    <>
      <h1>List Posts</h1>
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
                <a className="btn btn-primary">Edit</a>
              </td>
              <td>
                <a className="btn btn-danger">
                    Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
