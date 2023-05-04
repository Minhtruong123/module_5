import { useEffect, useState } from "react";
import * as facilityService from "../service/facilityService";
import * as customerService from "../service/customerService";
import * as contractList from "../service/contractService";
import { Link } from "react-router-dom";
function ContractList() {
  const [facilityList, setFacilityList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [contract, setContract] = useState([]);
  const [contractData, setContractData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await facilityService.findAll();
      let result2 = await customerService.findAll();
      let result3 = await contractList.findAll();
      setFacilityList(result);
      setCustomerList(result2);
      setContract(result3);
    };
    fetchApi();
  }, []);

  const handleDeleteContract = async (id) => {
    let result = await contractList.findById(id);
    setContractData(result);
  };

  const handleDelete = async () => {
    await contractList.deleteContract(contractData.id);
    let result = await contractList.findAll();
    setContract(result);
  };

  return (
    <>
      <div className="container-fluid px-0 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div className="position-absolute facility-title">CONTRACT LIST</div>
      </div>

      <div
        className="row bg-light my-5 pe-0 mx-0"
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
          <Link to="/contractNew">
            <button
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#2b7f74",
              }}
              type="button"
              className="btn create-facility"
            >
              Create new contract
            </button>
          </Link>
        </div>
      </div>

      <div className="row mx-0 mt-5 contain" style={{ height: 800 }}>
        <div className="col-12 px-0">
          <h2
            className="mb-3"
            style={{ color: "#cbbe73", fontSize: 27, textAlign: "center" }}
          >
            Contract List
          </h2>
          <table className="table table-border table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Customer Name</th>
                <th>Facility</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Money</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {contract.map((contract, index) => (
                <tr>
                  <td>{contract.idContract}</td>
                  <td>
                    {
                      customerList.find(
                        (customer) => customer.id === contract.customerId
                      )?.name
                    }
                  </td>
                  <td>
                    {
                      facilityList.find(
                        (facility) => facility.id === contract.facilityId
                      )?.nameFacility
                    }
                  </td>
                  <td>{contract.dayIn}</td>
                  <td>{contract.dayOut}</td>
                  <td>{contract.deposits}</td>
                  <td>
                    <Link
                      className="btn edit-button me-2"
                      style={{ width: "20%" }}
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn delete-button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => handleDeleteContract(contract.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <span style={{ color: "red" }}>{contractData?.idContract}</span>
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
export default ContractList;
