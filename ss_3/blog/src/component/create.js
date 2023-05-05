import React from "react";
import * as blogService from "../service/blog_service";
import { Formik, Form, Field, ErrorMessage } from "formik";
import slugify from "slugify";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Create() {
  let day = new Date();
  let dayAt = day.getDate();
  let monthAt = day.getMonth() + 1;
  let yearAt = day.getFullYear();
  let dateAt = dayAt + "-" + monthAt + "-" + yearAt;
  return (
    <>
      <h1>Create Post</h1>
      <Link className="btn btn-primary my-3" to={"/"}>
        Back to the list
      </Link>
      <Formik
        initialValues={{
          title: "",
          category: "",
          content: "",
          updatedAt: dateAt,
        }}
        validationSchema={Yup.object({
          title: Yup.string().required(".Required"),
          category: Yup.string().required(".Required"),
          content: Yup.string().required(".Required"),
        })}
        onSubmit={(values) => {
          const slug = slugify(values.title, { lower: true, strict: true });
          const createPost = async () => {
            await blogService.save({ ...values, slug });
          };
          createPost();
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
            <ErrorMessage name="title" component="span" className="form-err" />
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
            <ErrorMessage name="category" component="span" className="form-err" />
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
            <ErrorMessage name="content" component="span" className="form-err" />
          </div>
          <button class="btn btn-outline-secondary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default Create;
