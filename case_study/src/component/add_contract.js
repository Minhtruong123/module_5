import { useEffect, useState } from "react";
import * as customerService from "../service/customerService";
import * as facilityService from "../service/facilityService";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import * as contractService from "../service/contractService"

function Contract() {
  const [customerList, setCustomerList] = useState();
  const [facilityList, setFacilityList] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const result = await customerService.findAll();
      const result2 = await facilityService.findAll();
      setCustomerList(result);
      setFacilityList(result2);
    };
    fetchApi();
  }, []);

  if(!customerList){
    return null;
  }

  if(!facilityList){
    return null;
  }

  return (
    <>
      {console.log(customerList)}
      <div className="container-fluid px-0 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div className="position-absolute facility-title">CONTRACT</div>
      </div>

      <div className="container" style={{ marginTop: 80, textAlign: "left" }}>
        <h1 className="reservation mb-5">Complete your reservation</h1>
        <div className="row" style={{ height: 1150 }}>
          <div className="col-8">
            <h2 className="mb-3" style={{ fontWeight: 500, fontSize: 20 }}>
              You selected an DMT One Reward member rate.
            </h2>
            <div className="mb-5">
              <Formik
                initialValues={{
                  idContract: "",
                  customerId: customerList[0]?.id,
                  facilityId: facilityList[0]?.id,
                  dayIn: "",
                  dayOut: "",
                  deposits: "",
                }}
                validationSchema={Yup.object({
                  idContract: Yup.string().required("Required."),
                  deposits: Yup.string().required("Required."),
                  dayIn: Yup.string()
                    .required("Required."),
                  dayOut: Yup.string()
                    .required("Required."),
                })}
                onSubmit={(values, {}) => {
                  const createContract = async () => {
                    values.customerId = parseInt(values.customerId);
                    values.facilityId = parseInt(values.facilityId)
                    await contractService.createContract(values);
                  }
                  createContract();
                }}
              >
                <Form>
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="idContract">ID Contract</label>
                      <Field
                        style={{ borderRadius: 5 }}
                        id="idContract"
                        type="text"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        name="idContract"
                      />
                      <ErrorMessage
                        name="idContract"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="customerInform">
                        Contract customer information
                      </label>
                      <Field
                        as="select"
                        name="customerId"
                        id="customerId"
                        className="form-control"
                      >
                        {customerList.map((customer, index) => (
                          <option key={index} value={customer.id}>
                            {customer.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="customerId"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="facilityInform">
                        Information about services that customers hire
                      </label>
                      <Field
                        as="select"
                        name="facilityId"
                        id="facilityId"
                        className="form-control"
                      >
                        {facilityList.map((facility, index) => (
                          <option key={index} value={facility.id}>
                            {facility.nameFacility}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="facilityId"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="dayIn">Day in</label>
                      <Field
                        style={{ borderRadius: 5 }}
                        id="dayIn"
                        type="date"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        name="dayIn"
                      />
                      <ErrorMessage
                        name="dayIn"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="dayOut">Day out</label>
                      <Field
                        style={{ borderRadius: 5 }}
                        id="dayOut"
                        type="date"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        name="dayOut"
                      />
                      <ErrorMessage
                        name="dayOut"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="deposits">Deposits</label>
                      <Field
                        style={{ borderRadius: 5 }}
                        id="
                    deposits"
                        type="text"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        name="deposits"
                      />
                      <ErrorMessage
                        name="deposits"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <h1
                      className="my-3 py-3"
                      style={{
                        fontWeight: 500,
                        fontSize: 30,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Terms and Conditions
                    </h1>
                    <p className="mb-3">
                      By booking, I certify that I have read and accept
                      the&ensp;
                      <span
                        style={{
                          color: "#73a093",
                          textDecoration: "underline",
                        }}
                      >
                        Terms of Use
                      </span>
                      &ensp; and&ensp;
                      <span
                        style={{
                          color: "#73a093",
                          textDecoration: "underline",
                        }}
                      >
                        Privacy Statement
                      </span>
                      &ensp; and I have read and understand the Rate Description
                      and Rate Rules for my reservation.
                    </p>
                    <p className="mb-3">
                      I am at least 18 years of age and at least one guest in my
                      party will meet the minimum check-in age requirement for
                      the hotel upon arrival.
                    </p>
                    <p className="mb-3">*Minimum Check-In Age: 18</p>
                    <p className="mb-3">
                      By joining IHG One Rewards, I certify that I have read and
                      accept the &ensp;
                      <span
                        style={{
                          color: "#73a093",
                          textDecoration: "underline",
                        }}
                      >
                        DMT One Rewards Membership Terms and Conditions
                      </span>
                      ,&ensp;
                      <span
                        style={{
                          color: "#73a093",
                          textDecoration: "underline",
                        }}
                      >
                        Privacy Statement
                      </span>
                      &ensp; and&ensp;
                      <span
                        style={{
                          color: "#73a093",
                          textDecoration: "underline",
                        }}
                      >
                        VietNam Notice of Financial Incentive
                      </span>
                      .
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "30%",
                      height: "5%",
                      backgroundColor: "#4ea58e",
                      border: "none",
                    }}
                  >
                    BOOK RESERVATION
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="col-4">
            <div className="mb-3">
              <img
                src="https://cdn1.ivivu.com/iVivu/2019/11/28/13/two-bedroom-pool-villa-cr-800x450.jpg"
                alt=""
              />
              <h2 className="mt-3" style={{ fontWeight: 500, fontSize: 20 }}>
                Furama Resort Da Nang
              </h2>
              <p className="mt-2" style={{ fontFamily: "sans-serif" }}>
                280 Tran Hung Dao, An Hai Tay, Son Tra Peninsula, Da Nang
              </p>
            </div>
            <hr />
            <div className="mb-3">
              <div className="row mt-4" style={{ fontWeight: 500 }}>
                <div className="col-6">
                  <h1 style={{ fontSize: "20px" }}>Total Price</h1>
                </div>
                <div className="col-6">
                  <h1 style={{ textAlign: "right", fontSize: "20px" }}>300$</h1>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <h1 style={{ fontWeight: 500, fontSize: "20px" }}>Dates</h1>
                </div>
                <div className="col-6">
                  <h1 style={{ textAlign: "right", fontSize: "20px" }}>
                    May 10-11,2023
                  </h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div className="mb-3">
              <div className="row mt-4" style={{ fontSize: 15 }}>
                <div className="col-6">
                  <h1 style={{ fontWeight: 500, fontSize: "20px" }}>
                    Reservation
                  </h1>
                </div>
                <div className="col-6">
                  <h1 style={{ textAlign: "right", fontSize: "20px" }}>
                    1 Room, 2 Guests
                  </h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div className="mb-3">
              <div className="row mt-4" style={{ fontSize: 15 }}>
                <div className="col-6">
                  <h1 style={{ fontWeight: 500, fontSize: "20px" }}>
                    Room Type
                  </h1>
                </div>
                <div className="col-6">
                  <h1 style={{ textAlign: "right", fontSize: "20px" }}>
                    1 King Resort Ocean
                  </h1>
                </div>
              </div>
            </div>
            <hr style={{ border: "2px solid black" }} />
            <div className="mb-3">
              <div className="row mt-4" style={{ fontSize: 15 }}>
                <div className="col-6">
                  <h1 style={{ fontWeight: 500, fontSize: "20px" }}>
                    1 night stay
                  </h1>
                </div>
                <div className="col-6">
                  <h1 style={{ textAlign: "right", fontSize: "20px" }}>300$</h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div className="mb-3">
              <div className="row mt-4" style={{ fontSize: 15 }}>
                <div className="col-6">
                  <h1 style={{ fontWeight: 500, fontSize: "20px" }}>
                    Average Nightly Rate
                  </h1>
                </div>
                <div className="col-6">
                  <h1 style={{ textAlign: "right", fontSize: "20px" }}>300$</h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div className="mb-3">
              <div className="row mt-4" style={{ fontSize: 15 }}>
                <div className="col-6">
                  <h1 style={{ fontWeight: 500, fontSize: "20px" }}>Taxes</h1>
                </div>
                <div className="col-6">
                  <h1 style={{ textAlign: "right", fontSize: "20px" }}>30$</h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div className="mb-3">
              <div className="row mt-4" style={{ fontSize: 15 }}>
                <div className="col-6">
                  <h1 style={{ fontWeight: 600, fontSize: 24 }}>Total Price</h1>
                </div>
                <div className="col-6">
                  <h1 style={{ textAlign: "right", fontSize: "20px" }}>330$</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contract;
