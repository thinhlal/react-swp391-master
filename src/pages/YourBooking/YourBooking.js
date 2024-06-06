import "./YourBooking.css";
import Header from "../../components/User/Header/Header.js";
import Footer from "../../components/User/Footer/Footer.js";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Images
import Sidebar from "../../components/User/Sidebar/Sidebar.js";

const bookings = [
  {
    id: "OD45345345435",
    status: "Pending",
    date: "29 nov 2024",
    time: "10:00 - 11:00",
    petName: "ABC",
    petType: "Dog",
    doctor: "Alex",
    services: "Periodic health check-ups for dogs",
    price: "70$",
  },
  {
    id: "OD45345345436",
    status: "Pending",
    date: "10 nov 2024",
    time: "12:00 - 13:00",
    petName: "DEF",
    petType: "Cat",
    doctor: "John",
    services: "Vaccination",
    price: "50$",
  },
  {
    id: "OD45345345437",
    status: "Completed booking",
    date: "20 nov 2024",
    time: "15:00 - 16:00",
    petName: "GHI",
    petType: "Dog",
    doctor: "Alex",
    services: "Grooming",
    price: "45$",
  },
];

function YourBooking() {
  return (
    <div className="container-your-booking">
      <div className="row-your-booking">
        <Header></Header>
        <div className="main-tittle-your-booking">
          <div className="overlap-group-booking">
            <div className="text-tittle-your-booking">Your Booking</div>
          </div>
        </div>
        <div className="overlap-booking">
          <Sidebar/>
          <div className="main-content-booking">
            <div className="your-Pet-Header-booking">
              <div className="search-pet-booking">
                <div className="search-pet-txt-booking">
                  Search Your Booking
                </div>
                <div className="search-pet-input-booking">
                  <input
                    type="text"
                    placeholder="Search"
                    className="label-input-booking"
                  />
                  <div className="search-pet-input-icons-booking">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-information-booking">
              {bookings.map((booking, index) => (
                <div key={index} className="info-detail-booking">
                  <div className="detail-booking-confirm-booking">
                    <div className="card-detail-booking-confirm-booking">
                      <div className="card-ID-booking">
                        <div className="detail-number-ID">
                          ID: {booking.id}
                          <div
                            className={`status-booking ${
                              booking.status === "Pending"
                                ? "status-pending"
                                : "status-completed"
                            }`}
                          >
                            Status: {booking.status}
                          </div>
                        </div>
                        <div className="card-body-content-booking">
                          <div className="text-card-body-content-booking">
                            <div className="col-booking">
                              <div className="mini-title-detail-booking">
                                Date Booking:
                              </div>{" "}
                              <br />
                              {booking.date}
                            </div>
                            <div className="col-booking">
                              <div className="mini-title-detail-booking">
                                Time:
                              </div>{" "}
                              <br />
                              {booking.time}
                            </div>
                            <div className="col-booking">
                              <div className="mini-title-detail-booking">
                                Pet Name:
                              </div>{" "}
                              <br />
                              {booking.petName}
                            </div>
                            <div className="col-booking">
                              <div className="mini-title-detail-booking">
                                Pet Type:
                              </div>{" "}
                              <br />
                              {booking.petType}
                            </div>
                            <div className="col-booking">
                              <div className="mini-title-detail-booking">
                                Selected Doctor:
                              </div>{" "}
                              <br />
                              {booking.doctor}
                            </div>
                            <div className="col-booking">
                              <div className="mini-title-detail-booking">
                                Services:
                              </div>{" "}
                              <br />
                              {booking.services}
                            </div>
                          </div>
                        </div>

                        <div className="price-cancel-rate-booking">
                          <div className="total-price-booking">
                            Total Price:&nbsp;
                            <div className="detail-price-booking">
                              {booking.price}
                            </div>
                          </div>
                          {booking.status === "Pending" ? (
                            <a href="/" className="cancel-booking-button-1">
                              <div className="text-sign-in-button-booking">
                                Cancel Booking
                              </div>
                            </a>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-primary feedback-rate-booking"
                              data-bs-toggle="modal"
                              data-bs-target="#newModal"
                            >
                              <div className="text-feedback-rate-booking">
                                Feedback
                              </div>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* pagination */}
               <div className="add-pet_pagination">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#123">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#123">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="123">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#123">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="123">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
            </div>

            {/* modal rating */}
            <div
              className="modal fade"
              id="newModal"
              tabIndex="-1"
              aria-labelledby="newModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="newModalLabel">
                      Your opinion matters to us!
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="rating-container">
                      <div className="main-title-rate">
                        How was quality of the call?
                      </div>
                      <div className="rate-success">
                        <div className="rating">
                          <input
                            type="radio"
                            name="rating"
                            value="5"
                            id="5"
                          />
                          <label htmlFor="5">☆</label>
                          <input
                            type="radio"
                            name="rating"
                            value="4"
                            id="4"
                          />
                          <label htmlFor="4">☆</label>
                          <input
                            type="radio"
                            name="rating"
                            value="3"
                            id="3"
                          />
                          <label htmlFor="3">☆</label>
                          <input
                            type="radio"
                            name="rating"
                            value="2"
                            id="2"
                          />
                          <label htmlFor="2">☆</label>
                          <input
                            type="radio"
                            name="rating"
                            value="1"
                            id="1"
                          />
                          <label htmlFor="1">☆</label>
                        </div>
                      </div>

                      <textarea placeholder="Leave a message, if you want"></textarea>
                      <button className="rating-button">Rate now</button>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="button-secondary"
                      data-bs-dismiss="modal"
                    >
                      Maybe later
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* modal confirm  */}
            
          </div>
        </div>

        {/* pagination */}
       

        <Footer></Footer>
      </div>
    </div>
  );
}

export default YourBooking;
