import axios from "axios";

export const findAll = async () => {
  try {
    const result = await axios.get("http://localhost:8080/contract");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const createContract = async (contract) => {
  try {
    await axios.post("http://localhost:8080/contract", { ...contract });
    alert("Create Success");
  } catch (e) {
    console.log(e);
  }
};

export const deleteContract = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/contract/${id}`);
    alert("Delete Success");
  } catch (e) {
    console.log(e);
  }
};

export const findById = async (id) => {
  try {
    const result = await axios.get(`http://localhost:8080/contract/${id}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const editContract = async (id,contract) => {
    try{
        await axios.put(`http://localhost:8080/contract/${id}`,{...contract});
        alert("Edit Success")
    }catch(e) {
        console.log(e);
    }
}