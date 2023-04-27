import React, { useEffect, useState } from 'react';
import * as post_service from "../service/post_service"

function List() {
    const [listPost, setListPost] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let result = await post_service.findAll();
            setListPost(result);
        }
        fetchApi();
    },[])
  return (
    <>
    <h1>List Posts</h1>
        <table className='table table-border table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>TIME</th>
                </tr>
            </thead>
            <tbody>
                {
                    listPost.map((post, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>{post.updatedAt}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}

export default List;