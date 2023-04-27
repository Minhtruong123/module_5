import React from "react";
import * as blog_service from "../service/blog_service";
import { Formik, Form, Field } from "formik";
import slugify from "slugify";
import * as Yup from "yup";

function Create() {
  return (
    <>
      <Formik
        initialValues={{
            title:"",
            category:"",
            content:""
        }}
        validationSchema={Yup.object({
            title: Yup.string().required(".Required"),
            category:Yup.string().required(".Required"),
            content: Yup.string().required(".Required")
        })}
        onSubmit={(values) => {
            const slug = slugify(values.title, {lower:true, strict: true});
        }}
      >
        <Form>

          <div className="input-group mb-3">
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="title"
              id="title"
            />
          </div>

          <div className="input-group mb-3">
            <label htmlFor="category">Category</label>
            <Field
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="category"
              id="category"
            />
          </div>

          <div className="input-group mb-3">
            <label htmlFor="content">Content</label>
            <Field
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="content"
              id="content"
            />
          </div>
          <button class="btn btn-outline-secondary" type="submit">Button</button>
        </Form>
      </Formik>
    </>
  );
}

export default Create;
