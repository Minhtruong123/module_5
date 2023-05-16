import React, { useEffect, useState } from "react";
import * as productService from "../service/product_service";
import { Link } from "react-router-dom";

function List() {
  const [productList, setProductList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [productData, setProductData] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const result = await productService.findAll();
      setProductList(result);
      const result2 = await productService.findAllType();
      setTypeList(result2);
    };
    fetchApi();
  }, []);
  const handleSearch = async () => {
    const keySearch = document.getElementById("search").value;
    const result3 = await productService.searchProduct(keySearch);
    if (result3 == "") {
      alert("Not Found Product")
    }
    setProductList(result3);
  };

  const handleDelete = async (id) => {
    const deleteProduct = await productService.findById(id);
    setProductData(deleteProduct);
  }

  const handleDeleteProduct = async () => {
    await productService.deleteProduct(productData?.id);
    const listProduct = await productService.findAll();
    setProductList(listProduct)
  }

  return (
    <>
      <h1 className="mb-3">List Product</h1>
      <Link to={"/create"} className="btn btn-primary mb-5">Create new product</Link>
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="search"
          id="search"
        />
        <button
          onClick={handleSearch}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </div>
      <table className="table table-border table-striped">
        <thead>
          <tr>
            <th>ID Product</th>
            <th>Name Product</th>
            <th>Date In</th>
            <th>Quantity</th>
            <th>Type Product</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr>
              <td>{product.productId}</td>
              <td>{product.nameProduct}</td>
              <td>{product.dateIn}</td>
              <td>{product.quantity}</td>
              <td>
                {typeList.find((type) => type.id == product.typeId)?.name}
              </td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-primary">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Product</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Do you want to delete <span className="text-danger">{productData?.nameProduct}</span></div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button onClick={handleDeleteProduct} type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default List;
