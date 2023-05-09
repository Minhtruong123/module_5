import React from 'react'
import axios from 'axios';

export const findAll = async () => {
  try{
    const result = await axios.get('http://localhost:8080/facilities');
    return result.data;
  }catch (error){
    console.log(error);
  }
}

export const createFacility = async (facility) => {
    try{
        await axios.post('http://localhost:8080/facilities',{...facility});
        alert("Create Success")
    }catch (e){
        console.log(e);
    }
}

export const deleteFacility = async (id) => {
    try{
        await axios.delete(`http://localhost:8080/facilities/${id}`);
        alert("Delete Success")
    }catch (e){
        console.log(e);
    }
}

export const findById = async (id) => {
    try{
        const result= await axios.get(`http://localhost:8080/facilities/${id}`);
        return result.data;
    }catch(e) {
        console.log(e);
    }
}

export const editFacility = async (id,facility) => {
    try{
        await axios.put(`http://localhost:8080/facilities/${id}`,{...facility});
        alert("Edit Success");
    }catch(e) {
        console.log(e);
    }
}

export const findAllTypeRoom = async () => {
    try{
        const result = await axios.get('http://localhost:8080/typeRoom');
        return result.data;
    }catch(error){
        console.log(error);
    }
}

export const findAllFreeService = async () => {
    try{
        const result = await axios.get('http://localhost:8080/freeService');
        return result.data;
    }catch (e){
        console.log(e);
    }
}