import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4918720150445!2d108.24887941477753!3d16.039945588899005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420fdbc8cc38ef%3A0x9a6a3e31121225d2!2sFurama%20Resort%20Danang!5e0!3m2!1svi!2s!4v1680858004992!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <section
          className="location text-light py-5"
          style={{ backgroundColor: "rgb(45, 111, 99)" }}
        >
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-3 d-flex align-items-center">
                <div className="p-2">
                  <i className="far fa-map fa-3x"></i>
                </div>
                <div className="ms-2">
                  <h6 className="text-start">ADDRESS</h6>
                  <p className="text-start">
                    103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                    District
                  </p>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center">
                <div className="p-2">
                  <i className="fas fa-mobile-alt fa-3x"></i>
                </div>
                <div className="ms-2">
                  <h6 className="text-start">CALL FOR QUERY</h6>
                  <p className="text-start">(090) 555 11 27</p>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center">
                <div className="p-2">
                  <i className="far fa-envelope fa-3x"></i>
                </div>
                <div className="ms-2">
                  <h6 className="text-start">SEND US MESSAGE</h6>
                  <p className="text-start">duongminhtruong1234@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center">
                <div className="p-2">
                  <i className="far fa-clock fa-3x"></i>
                </div>
                <div className="ms-2">
                  <h6 className="text-start">OPENING HOURS</h6>
                  <p className="text-start">09:00 AM - 18:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          className="relative pt-8 pb-6"
          style={{ backgroundColor: "#addccf" }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-blueGray-700">
                  How to Get to Us
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                  Find us on any of these platforms, we respond 1-2 business
                  days.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                  <button
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/presentation?ref=njs-profile"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://blog.creative-tim.com?ref=njs-profile"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://www.github.com/creativetimofficial?ref=njs-profile"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                        >
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        >
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/terms?ref=njs-profile"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/privacy?ref=njs-profile"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/contact-us?ref=njs-profile"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © <span id="get-current-year">2023</span>
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  />{" "}
                  ReactJS by&ensp;
                  <a
                    href="https://www.facebook.com/truongdepzai.07/"
                    className="text-blueGray-500 hover:text-blueGray-800"
                  >
                    Duong Minh Truong
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;
