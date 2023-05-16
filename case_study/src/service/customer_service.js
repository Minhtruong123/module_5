import axios from "axios";

export const findAll = async () =>{
    try{
        const result = await axios.get('http://localhost:8080/customer')
        return result.data;
    }catch (error) {
        console.log(error);
    }
}

export const createCustomer = async (customer) => {
    try{
        await axios.post('http://localhost:8080/customer', {...customer});
        console.log("Create Success");
    }catch (e) {
        console.log(e);
    }
}

export const deleteCustomer = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/customer/${id}`)
        console.log("Delete Success");
    }catch (e) {
        console.log(e);
    }
}

export const findById = async (id) => {
    try{
        const result = await axios.get(`http://localhost:8080/customer/${id}`);
        return result.data;
    }catch (e) {
        console.log(e);
    }
}

export const editCustomer = async (id,customer) => {
    try {
        await axios.put(`http://localhost:8080/customer/${id}`, {...customer});
        console.log("Edit Success");
    }catch (e) {
        console.log(e);
    }
}
    
export const findAllTypeCustomer = async () => {
    try{
        const result = await axios.get('http://localhost:8080/typeCustomer');
        return result.data;
    }catch (error){
        console.log(error);
    }
}