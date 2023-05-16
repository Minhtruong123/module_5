import React, { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as productService from "../service/product_service";

function Edit() {
  const [productData, setProductData] = useState();
  const [typeList, setTypeList] = useState([])
  const param = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const fetchApi = async () => {
      const result = await productService.findById(param.id);
      setProductData(result);
      const result2= await productService.findAllType();
      setTypeList(result2)
    };
    fetchApi();
  }, [param.id]);

  if (!productData) {
    return null;
  }

  return (
    <>
      <h1>Edit Product</h1>
      <Link className="btn btn-primary mb-5" to={"/"}>Back to the list</Link>
      <Formik
        initialValues={{
          productId: productData.productId,
          nameProduct: productData.nameProduct,
          dateIn: productData.dateIn,
          quantity: productData.quantity,
          typeId: productData.typeId,
        }}
        onSubmit={(values) => {
            const editProduct = async () => {
                await productService.edit(productData.id,values);
            }
            editProduct()
            navigate("/")
        }}
      >
        <Form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              ID Product
            </span>
            <Field
              type="text"
              class="form-control"
              placeholder="ID Product"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="productId"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Name Product
            </span>
            <Field
              type="text"
              class="form-control"
              placeholder="Name Product"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="nameProduct"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Date In
            </span>
            <Field
              type="date"
              class="form-control"
              placeholder="Date In"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="dateIn"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Quantity
            </span>
            <Field
              type="text"
              class="form-control"
              placeholder="Quantity"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="quantity"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Type Product
            </span>
            <Field
              as="select"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="typeId"
            >
                {typeList.map((type,index) => (
                    <option value={type.id} key={index}>{type.name}</option>
                ))}
            </Field>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Edit;
