import React, { useEffect, useState } from "react";
import * as blog_service from "../service/blog_service";
import { Formik, Form, Field, ErrorMessage } from "formik";
import slugify from "slugify";
import * as Yup from "yup";
import { Link, useParams } from "react-router-dom";

function Edit() {
  let day = new Date();
  let dayAt = day.getDate();
  let monthAt = day.getMonth() + 1;
  let yearAt = day.getFullYear();
  let dateAt = dayAt + "-" + monthAt + "-" + yearAt;
  const param = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const result = await blog_service.findById(param.id);
      setPost(result);
    };
    fetchApi();
  }, []);
  if (!post) return null;
  return (
    <>
      <h1>Edit Post</h1>
      <Link className="btn btn-primary my-3" to={"/"}>
        Back to the list
      </Link>
      <Formik
        initialValues={{
          title: post?.title,
          category: post?.category,
          content: post?.content,
          updatedAt: dateAt,
        }}
        validationSchema={Yup.object({
          title: Yup.string().required(".Required"),
          category: Yup.string().required(".Required"),
          content: Yup.string().required(".Required"),
        })}
        onSubmit={(values) => {
          const slug = slugify(values.title, { lower: true, strict: true });
          const editPost = async () => {
            await blog_service.editPost(post?.id, { ...values, slug });
          };
          editPost();
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
            <ErrorMessage
              name="category"
              component="span"
              className="form-err"
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
            <ErrorMessage
              name="content"
              component="span"
              className="form-err"
            />
          </div>
          <button class="btn btn-outline-secondary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default Edit;
