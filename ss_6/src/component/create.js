import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as blogService from "../service/blog_service";
import { Link } from "react-router-dom";

function Create() {
  return (
    <>
      <h1 className="mt-3">Create</h1>
      <Link className="btn btn-primary mb-5" to={"/"}>
        Back to the list
      </Link>
      <Formik
        initialValues={{
          title: "",
          slug: "",
          category: "",
          thumbnail_url: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required(".Required"),
          slug: Yup.string().required(".Required"),
          category: Yup.string().required(".Required"),
          thumbnail_url: Yup.string().required(".Required"),
        })}
        onSubmit={(values) => {
          const create = async () => {
            await blogService.create(values);
          };
          create();
        }}
      >
        <Form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
            <Field
              type="text"
              className="form-control"
              placeholder="Title"
              aria-label="Title"
              aria-describedby="basic-addon1"
              name="title"
            />
            <ErrorMessage name="title" component="span" className="form-err" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Slug
            </span>
            <Field
              type="text"
              className="form-control"
              placeholder="Slug"
              aria-label="Slug"
              aria-describedby="basic-addon1"
              name="slug"
            />
            <ErrorMessage name="slug" component="span" className="form-err" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Category
            </span>
            <Field
              type="text"
              className="form-control"
              placeholder="Category"
              aria-label="Category"
              aria-describedby="basic-addon1"
              name="category"
            />
            <ErrorMessage
              name="category"
              component="span"
              className="form-err"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Thumbnail URL
            </span>
            <Field
              type="text"
              className="form-control"
              placeholder="Thumbnail URL"
              aria-label="Thumbnail"
              aria-describedby="basic-addon1"
              name="thumbnail_url"
            />
            <ErrorMessage
              name="thumbnail_url"
              component="span"
              className="form-err"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Create;
