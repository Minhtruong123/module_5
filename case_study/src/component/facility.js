import { useEffect, useState } from "react";
import * as facilityService from "../service/facilityService";
import { Link } from "react-router-dom";

function Facilities() {
  const [facilityList, setFacilityList] = useState([]);
  const [facilityData, setFacilityData] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      let result = await facilityService.findAll();
      setFacilityList(result);
    };
    fetchApi();
  }, []);

  const handleDeleteFacility = async (id) => {
    const result = await facilityService.findById(id);
    setFacilityData(result);
  };

  const handleDelete = async () => {
    await facilityService.deleteFacility(facilityData.id);
    let result = await facilityService.findAll();
    setFacilityList(result);
  };

  return (
    <>
      <div className="container-fluid px-0 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div className="position-absolute facility-title">FACILITIES</div>
      </div>

      <div>
        <div
          className="row bg-light pe-0 mt-5 mx-0"
          style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
        >
          <div
            className="hideFilter col-2 fs-5 d-flex justify-content-center align-items-center"
            style={{
              borderTop: "1px solid rgb(198, 197, 197)",
              fontFamily: "sans-serif",
            }}
          >
            HIDE FILTERS
          </div>
          <div
            className="col-6"
            style={{ borderTop: "1px solid rgb(198, 197, 197)" }}
          >
            <div>
              <div className="container mt-0">
                <div className="section-sort clearfix">
                  <h4
                    className="title-sort"
                    style={{
                      height: "64px",
                      marginTop: "0",
                      lineHeight: "64px",
                      marginRight: "10px",
                      fontWeight: "normal",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Sort by:
                  </h4>
                  <ul
                    style={{ fontFamily: "sans-serif" }}
                    className="sort-bar clearfix block-sm"
                  >
                    <li className="sort-by-name">
                      <a class="sort-by-container" href="#">
                        <span>name</span>
                      </a>
                    </li>
                    <li className="sort-by-price">
                      <a className="sort-by-container" href="#">
                        <span>price</span>
                      </a>
                    </li>
                    <li className="sort-by-rating active">
                      <a class="sort-by-container" href="#">
                        <span>duration</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="tiles-swap clearfix block-sm">
                    <li className="swap-list active">
                      <a href="#">
                        <i class="fa fa-list-ul"></i>
                      </a>
                    </li>
                    <li className="swap-grid">
                      <a href="#">
                        <i className="fa fa-th-large"></i>
                      </a>
                    </li>
                    <li class="swap-block">
                      <a href="#">
                        <i className="fa fa-th"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-2 d-flex align-items-center"
            style={{
              borderTop: "1px solid rgb(198, 197, 197)",
              borderLeft: "1px solid rgb(198, 197, 197)",
            }}
          >
            {/* Phân trang */}
            <nav
              className="d-flex justify-content-center"
              aria-label="Page navigation example"
            >
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" style={{ border: "none" }}>
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" style={{ border: "none" }}>
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" style={{ border: "none" }}>
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" style={{ border: "none" }}>
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" style={{ border: "none" }}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-2 px-0">
            <Link to="/createFacility">
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#2b7f74",
                }}
                type="button"
                className="btn create-facility"
              >
                Create new facility
              </button>
            </Link>
          </div>
        </div>

        <div
          className="row my-5 mx-0 container-fluid contain"
          style={{ fontFamily: "sans-serif" }}
        >
          {facilityList.map((faciliti, index) => {
            return (
              <div
                key={index}
                className="col-4 d-flex justify-content-center align-items-center mt-5"
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  <img src={faciliti.img} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "bold" }}>
                      {faciliti.nameFacility}
                    </h5>
                    <p className="card-text">
                      Room size: {faciliti.roomSize} m<sup>2</sup>
                    </p>
                    <div className="d-flex justify-content-center">
                      <Link
                        to={`/editFacility/${faciliti.id}`}
                        className="btn edit-button mt-2 me-2"
                        style={{ width: "20%" }}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="btn delete-button mt-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleDeleteFacility(faciliti.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="row px-0 mx-0 pt-5" style={{ height: "250px" }}>
        <div className="col-12">
          <h2
            className="d-flex justify-content-center"
            style={{ color: "#cbbe73", fontSize: "27px" }}
          >
            SERVICES & FACILITIES
          </h2>
          <div className="d-flex justify-content-center">
            <p className="text-center pt-3" style={{ width: "50%" }}>
              Whether you are looking for a short weekend break or a longer
              holiday, we offer a range of packages that will cater for all.
            </p>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Do you want to delete{" "}
              <span style={{ color: "red" }}>{facilityData?.nameFacility}</span>
              <div id="deleteName"></div>?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facilities;
