import { Component, useEffect } from "react";
import { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as facilityService from "../service/facilityService";
import { useParams } from "react-router-dom";

function EditFacility() {
  const [facilityData,setFacilityData] = useState()
  const [type, setType] = useState();
  const [typeRoomList, setTypeRoomList] = useState([]);
  const [freeServiceList, setFreeServiceList] = useState([]);
  const param = useParams();
  const handleTypeChange = (event) => {
    setType(event);
  };

  useEffect(() => {
    const fetchApi = async () => {
      let result = await facilityService.findAllTypeRoom();
      let result2 = await facilityService.findAllFreeService();
      let facility = await facilityService.findById(param.id);
      setTypeRoomList(result);
      setFreeServiceList(result2);
      setFacilityData(facility);
      setType(facility.typeRoom)
    };
    fetchApi();
  }, []);

  if (!facilityData){
    return null;
  }

  return (
    <>
      <div className="container-fluid px-0 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div className="position-absolute facility-title">EDIT FACILITY</div>
      </div>

      <div
        className="row mx-0 contain"
        style={{ height: "1000px", marginBottom: "150px" }}
      >
        <div className="col-12">
          <Formik
            initialValues={{
              nameFacility: facilityData.nameFacility,
              typeRoom: facilityData.typeRoom,
              roomSize: facilityData.roomSize,
              img: facilityData.img,
              price: facilityData.price,
              roomStandard: facilityData.roomStandard,
              floor: facilityData.floor,
              poolArea: facilityData.poolArea,
              description: facilityData.description,
              freeService: facilityData.freeService,
            }}
            // validationSchema={Yup.object({
            //   nameFacility: Yup.string()
            //     .required("Required.")
            //     .matches(/^[a-zA-Z ]*$/, "Must not contain numbers"),
            //   roomSize: Yup.string().required("Required."),
            //   img: Yup.string().required("Required."),
            //   price: Yup.string().required("Required."),
            //   roomStandard: Yup.string().required("Required."),
            //   floor: Yup.string()
            //     .required("Required.")
            //     .matches(/^[1-9]\d*$/, "Must be a positive integer."),
            //   poolArea: Yup.string()
            //     .required("Required.")
            //     .matches(/^[1-9]\d*$/, "Must be a positive integer."),
            //   description: Yup.string().required("Required."),
            // })}
            onSubmit={(values, {}) => {
              const editFacility = async () => {
                values.typeRoom= type;
                console.log(values);
                await facilityService.editFacility(facilityData?.id,values);
              };
              editFacility();
            }}
          >
            <Form action="" className="d-flex justify-content-center">
              <div
                className="card"
                style={{
                  width: "30%",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  marginTop: "2%",
                  marginBottom: 100,
                }}
              >
                <img
                  src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        Name of the facility
                      </h5>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Name"
                        name="nameFacility"
                      />
                      <ErrorMessage
                        name="nameFacility"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p className="card-text" style={{ marginRight: 75 }}>
                        Type room:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        name="typeRoom"
                        render={() => (
                          <select
                            style={{ borderRadius: 5, width: "94%" }}
                            onChange={(event) =>
                              handleTypeChange(event.target.value)
                            }
                          >
                            {typeRoomList.map((typeRoom, index) => (
                              <option key={index} value={typeRoom.id}>
                                {typeRoom.name}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Room size:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Room size"
                        name="roomSize"
                      />
                      <ErrorMessage
                        name="roomSize"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 105 }}
                      >
                        Image:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Image"
                        name="img"
                      />
                      <ErrorMessage
                        name="img"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 105 }}
                      >
                        Price:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Price"
                        name="price"
                      />
                      <ErrorMessage
                        name="price"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  {/* type option */}
                  {type == 1 && (
                    <div>
                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Room Standard
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            type="text"
                            style={{ borderRadius: 5 }}
                            placeholder="Room Standard"
                            name="roomStandard"
                          />
                          <ErrorMessage
                            name="roomStandard"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>

                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Floor
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            type="text"
                            style={{ borderRadius: 5 }}
                            placeholder="Floor"
                            name="floor"
                          />
                          <ErrorMessage
                            name="floor"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>

                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Swimming pool area
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            type="text"
                            style={{ borderRadius: 5 }}
                            placeholder="Area"
                            name="poolArea"
                          />
                          <ErrorMessage
                            name="poolArea"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>

                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text text-start">
                            Description of other amenities
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            name="description"
                            render={() => (
                              <textarea
                                style={{ borderRadius: 5, width: "93%" }}
                                placeholder="Describe"
                              />
                            )}
                          />
                          <ErrorMessage
                            name="description"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {type == 2 && (
                    <div>
                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            House Standard
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            type="text"
                            style={{ borderRadius: 5 }}
                            placeholder="House Standard"
                            name="roomStandard"
                          />
                          <ErrorMessage
                            name="roomStandard"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>

                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text text-start">
                            Description of other amenities
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            as="textarea"
                            id="topic"
                            name="description"
                            style={{ borderRadius: 5, width: "93%" }}
                          ></Field>           
                          <ErrorMessage
                            name="description"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {type == 3 && (
                    <div>
                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Free service included
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            name="freeService"
                            render={() => (
                              <select style={{ borderRadius: 5, width: "94%" }}>
                                {freeServiceList.map((service, index) => (
                                  <option key={index} value={service.id}>
                                    {service.name}
                                  </option>
                                ))}
                              </select>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <input
                    type="submit"
                    className="btn btn-primary"
                    defaultValue="Submit"
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
export default EditFacility;
