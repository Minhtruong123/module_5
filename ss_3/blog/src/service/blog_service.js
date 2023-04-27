import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/posts")
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const save = async (post) => {
    try {
        await axios.post("http://localhost:8080/posts", {...post});
        alert("Create Success");
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/posts/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/posts/${id}`);
        alert("Delete Success");
    } catch (error) {
        console.log(error);
    }
}

export const editPost = async (id, post) => {
    try {
        await axios.put(`http://localhost:8080/posts/${id}`, {...post});
        alert("Edit success");
    } catch (error) {
        console.log(error);
    }
}