import React, { Component } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-content row d-flex justify-content-center mx-0">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <a
            className=" d-flex justify-content-center align-items-center"
            href="#"
          >
            <img
              style={{ width: "30%" }}
              src="\img\Logo-FURAMA-RESORT-black.png"
              alt=""
            />
          </a>
        </div>

        <div className="col-3">
          <div
            className="box bg-white"
            style={{ width: "50%%", height: "100%" }}
          >
            <div className="tripadvisor-logo" style={{ width: "100%" }}>
              <img
                style={{ width: "20%%" }}
                src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
              />
            </div>
            <div className="tripadvisor-rating">
              <img
                style={{ width: "20%" }}
                src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
              />
            </div>
            <div className="text-start">2,746 Reviews</div>
          </div>
        </div>

        <div className="col-3 pt-3">
          <div className="float-start pe-2" style={{ height: "100%" }}>
            <i class="fas fa-map-marker-alt" style={{ color: "green" }}></i>
          </div>
          <div>
            <p className="text-start">
              103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
              District, Danang City, Vietnam
            </p>
            <p className="text-start ps-2">
              <span style={{ color: "green" }}>7.0 km</span> from Danang Airport
            </p>
          </div>
        </div>

        <div className="col-3 pt-3">
          <div className="d-flex">
            <div className="pe-2">
              <i style={{ color: "green" }} className="fas fa-phone"></i>
            </div>
            <div>+84-905-551-127</div>
          </div>
          <div className="d-flex pt-3">
            <div className="pe-2">
              <i style={{ color: "green" }} className="fas fa-envelope"></i>
            </div>
            <div>duongminhtruong1234@gmail.com</div>
          </div>
        </div>
      </div>

      <nav
        className="navbar nav-sticky navbar-expand-lg py-0"
        style={{ backgroundColor: "rgb(45, 111, 99)" }}
      >
        <div className="container-fluid" style={{ paddingLeft: "4%" }}>
          <Link
            style={{ width: "5%", height: "5%" }}
            className="navbar-brand py-0"
            to="/"
          >
            <img width="100%" height="5%" src="/img/FURAMA (1).png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ height: "50px" }}>
                <Link
                  className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                  aria-current="page"
                  to="/"
                >
                  Furama
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                  to="/facility"
                >
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                  href="#"
                >
                  Cuisines
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                  href="#"
                >
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                  href="#"
                >
                  Offer
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle furama py-0 d-flex justify-content-center align-items-center px-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manager
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Employee
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/customer"}>
                      Customer
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                    to={"/contract"}
                  >
                    Contract
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
