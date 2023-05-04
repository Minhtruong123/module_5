function Home() {
    return (
      <>
        <div className="slider position-relative">
          <div className="slide active position-relative">
            <img
              src="https://furamavietnam.com/wp-content/uploads/2019/07/Vietnam_Danang_Furama_Resort_Exterior_Ocean-Pool-6.jpg"
              alt="Slide 1"
            />
            <div className="position-absolute banner-title">
              A CULINARY RESORT ON ONE OF THE SIX MOST LUXURIOUS BEACHES IN THE
              WORLD
            </div>
          </div>
          <div className="slide">
            <img
              src="https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior-Furama-girl-with-pink-hat.jpg"
              alt="Slide 2"
            />
            <div className="position-absolute banner-title">
              A CULINARY RESORT ON ONE OF THE SIX MOST LUXURIOUS BEACHES IN THE
              WORLD
            </div>
          </div>
          <div className="slide">
            <img
              src="https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Courtyard.jpg"
              alt="Slide 3"
            />
            <div className="position-absolute banner-title">
              A CULINARY RESORT ON ONE OF THE SIX MOST LUXURIOUS BEACHES IN THE
              WORLD
            </div>
          </div>
          <div className="prev-btn">&#10094;</div>
          <div className="next-btn">&#10095;</div>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="booking position-relative d-flex">
            <div
              className="d-flex align-items-center mx-2 ms-4"
              style={{ height: "100%", width: "18%" }}
            >
              <input
                className="ps-2"
                style={{
                  height: "65%",
                  borderRadius: "10px",
                  width: "100%",
                  border: "none",
                  color: "black",
                }}
                type="date"
              />
            </div>
            <div
              className="d-flex align-items-center mx-2"
              style={{ height: "100%", width: "18%" }}
            >
              <input
                className="ps-2"
                style={{
                  height: "65%",
                  borderRadius: "10px",
                  width: "100%",
                  border: "none",
                  color: "black",
                }}
                type="date"
              />
            </div>
            <div
              className="d-flex align-items-center mx-2"
              style={{ height: "100%", width: "18%" }}
            >
              <input
                className="ps-2"
                style={{
                  height: "65%",
                  borderRadius: "10px",
                  width: "100%",
                  border: "none",
                  color: "black",
                }}
                type="text"
                placeholder="Promo code"
              />
            </div>
            <div
              className="d-flex align-items-center mx-2"
              style={{ height: "100%", width: "18%", fontFamily: "sans-serif" }}
            >
              <input
                className="d-flex align-items-center justify-content-center"
                style={{
                  height: "65%",
                  borderRadius: "10px",
                  width: "100%",
                  fontSize: "15px",
                  border: "none",
                  backgroundColor: "rgb(176, 220, 211)",
                  color: "black",
                }}
                type="submit"
                value="CHECK AVAILABILITY"
              />
            </div>
            <div
              className="d-flex align-items-center mx-2"
              style={{ height: "100%", width: "18%", fontFamily: "sans-serif" }}
            >
              <input
                className="d-flex align-items-center justify-content-center"
                style={{
                  height: "65%",
                  borderRadius: "10px",
                  width: "100%",
                  fontSize: "15px",
                  backgroundColor: "rgb(45, 111, 99)",
                  border: "none",
                  color: "white",
                }}
                type="submit"
                value="MODIFY & CANCEL"
              />
            </div>
          </div>
        </div>
  
        <div className="row mx-0 mt-4" style={{ height: "400px" }}>
          <div className="col-4 mt-4 ps-5">
            <h2
              style={{
                color: "#cbbe73",
                fontFamily: "Playfair Display",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "36px",
                fontStyle: "normal",
              }}
            >
              THIS WORLD CLASS RESORT, FURAMA DANANG, REPUTABLE FOR BEING A
              CULINARY RESORT IN VIETNAM
            </h2>
          </div>
          <div className="col-4">
            <a target="_blank" href="https://www.youtube.com/watch?v=IjlT_4mvd-c">
              <img
                width="100%"
                src="https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-4 mt-4">
            <div>
              <p
                className="text-start"
                style={{
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                }}
              >
                Overlooking the long stretch of wide white sand on Danang Beach,
                Furama Resort Danang is a gateway to three World Heritage Sites of
                Hoi An (20 minutes), My Son (90 minutes) and Hue (2 hours). The
                198 rooms and suites plus 70 two to four bedroom pool villas
                feature tasteful décor, designed with traditional Vietnamese style
                and a touch of French colonial architecture and guarantee the
                Vietnam’s the most prestigious resort -counting royalty,
                presidents, movie stars and international business leaders among
                its celebrity guests.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row mx-0 offerDeals"
          style={{ height: "100px"}}
        >
          <div className="col-12 d-flex justify-content-center align-items-end pb-2">
            <h2 style={{ color: "white", fontSize: "35px" }}>OFFERS & DEAL</h2>
          </div>
        </div>
        <div className="row mx-0 pt-5" style={{ height: "250px" }}>
          <div className="col-12" style={{ width: "100%", height: "100%" }}>
            <h2
              className="d-flex justify-content-center"
              style={{ color: "#cbbe73", fontSize: "27px" }}
            >
              JOINING OUR CULINARY & RECREATIONAL EXPERIENCE
            </h2>
            <div className="d-flex justify-content-center">
              <p className="text-center" style={{ maxWidth: "400px" }}>
                The Furama Resort aims to make your stay in Vietnam a unique and
                unforgettable experience. Whether you prefer to be active or just
                to relax, we offer a wide range of activities and services to suit
                your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 contain">
          <div className="row mx-0" style={{ height: "500px" }}>
            <div className="col-6">
              <img
                src="https://furamavietnam.com/wp-content/uploads/2018/07/CULIRARY.jpg"
                alt=""
              />
            </div>
            <div className="col-6">
              <h2
                style={{
                  fontSize: "27px",
                  color: "#cbbe73",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  paddingTop: "18%",
                }}
              >
                CULINARY
              </h2>
              <p className="mt-4">
                The resort’s culinary experience features a mixture of the
                authentic and locally inspired Vietnamese, Asian, Italian and
                other European cuisines plus the best imported steaks. The resort
                presents guests with varied gastronomic venues – the hip and
                breezy bar overlooking the beach, the exclusive Lagoon pool
                surrounded by a tropical garden, the true Italian flare offered at
                the Don Cipriani’s, the refined Asian touch at Café Indochine or
                the authentic central Vietnam cuisine at the Danaksara.
              </p>
              <button
                type="button"
                style={{ backgroundColor: "rgb(45, 111, 99)", color: "white" }}
                className="btn mt-4"
              >
                READ MORE
              </button>
            </div>
          </div>
  
          <div className="row mx-0" style={{ height: "500px" }}>
            <div className="col-6">
              <h2
                style={{
                  fontSize: "27px",
                  color: "#cbbe73",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  paddingTop: "18%",
                }}
              >
                MEETING & EVENT
              </h2>
              <p className="mt-4">
                A well-appointed International Convention Palace with ballrooms
                can accommodate up to 1,000 people in style, with another ten
                function rooms for 50 to 300 people each. A variety of
                cultural-themed parties on the beach or around the lagoon, in the
                ballrooms or outside the resort, with the surprising arrivals of
                VIPs from Helicopter landing on the resort’s own Helipad…
              </p>
              <button
                type="button"
                style={{ backgroundColor: "rgb(45, 111, 99)", color: "white" }}
                className="btn mt-4"
              >
                READ MORE
              </button>
            </div>
            <div className="col-6">
              <img
                src="https://furamavietnam.com/wp-content/uploads/2018/10/02.-ICP-ICP_Furama_Danang_-Ball-Room-4.jpg"
                alt=""
              />
            </div>
          </div>
  
          <div className="row mx-0" style={{ height: "500px" }}>
            <div className="col-6">
              <img
                src="https://furamavietnam.com/wp-content/uploads/2018/07/RECREATION.jpg"
                alt=""
              />
            </div>
            <div className="col-6">
              <h2
                style={{
                  fontSize: "27px",
                  color: "#cbbe73",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  paddingTop: "18%",
                }}
              >
                RECREATION
              </h2>
              <p className="mt-4">
                A full range of Water Sports will keep you busy. Stop by the Water
                Sport House where our experienced staff are waiting to assist or
                train you in the use of any of our equipment.
              </p>
              <button
                type="button"
                style={{ backgroundColor: "rgb(45, 111, 99)", color: "white" }}
                className="btn mt-4"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
  
      </>
    );
  }
  
  export default Home;
  