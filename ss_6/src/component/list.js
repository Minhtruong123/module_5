import React, { useEffect, useState } from "react";
import * as blogService from "../service/blog_service";
import {Link} from "react-router-dom"

function List() {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await blogService.findAll();
      setBlogList(result);
    };
    fetchApi();
  }, []);
  return (
    <>
      <h1 className="mt-3">List</h1>
      <Link to={"/create"} className="btn btn-primary mb-5">Create new blog</Link>
      <table className="table table-border table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Category</th>
            <th>Thumbnail URL</th>
          </tr>
        </thead>
        <tbody>
          {blogList.map((blog, index) => (
            <tr key={index}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.slug}</td>
              <td>{blog.category}</td>
              <td>{blog.thumbnail_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
