import axios from "axios";
export const findAll = async () => {
    try {
        const result= await axios.get(`http://localhost:8080/product`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const findAllType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/typeProduct`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const edit = async (id,product) => {
    try {
        await axios.put(`http://localhost:8080/product/${id}`,{...product});
        alert("Edit Success")
    } catch (error) {
        console.log(error);
    }
}

export const searchProduct = async (search) => {
    try {
        const result= await axios.get(`http://localhost:8080/product?nameProduct_like=${search}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const searchType = async (search) => {
    try {
        const result = await axios.get(`http://localhost:8080/product?typeId_like=${search}`);
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/product/${id}`);
        alert("Delete Success")
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (product) => {
    try {
        await axios.post(`http://localhost:8080/product`,{...product});
        alert("Create Success")
    } catch (error) {
        console.log(error);
    }
}