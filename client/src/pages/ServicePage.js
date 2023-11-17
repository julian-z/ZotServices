import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ServicePage.css";
import NavBar from "../components/NavBar/NavBar";
import Review from "../components/Review/Review";
import { fetchFromDjango, calculateRating, formatCategory } from "./Helpers";
import { ENDPOINT_URL, EMPTY_SERVICE } from "./Constants";

// Display the information and reviews of a service
function ServicePage() {
  const { sid } = useParams();
  const [service, setService] = useState(EMPTY_SERVICE);

  useEffect(() => {
    // Asynchronously fetch the data of /services/:sid
    const fetchData = async (endpoint) => {
      try {
        const data = await fetchFromDjango(endpoint);
        setService(data);
      } catch (error) {
        console.error("ERROR FETCHING DATA:", error);
      }
    };
    console.log(ENDPOINT_URL + `/services/${sid}/`);
    fetchData(`/services/${sid}/`);
  }, [sid]);

  return (
    <div style={{ backgroundColor: "rgb(48, 48, 48)" }}>
      <NavBar></NavBar>

      {/* Service Page container */}
      <div className="service-page">
        {/* Title, price, rating, user, etc */}
        <div className="service-page-details">
          <div>
            <h1>{service["title"]}</h1>

            {/* Left side of details - title, price, user, loc, cate, desc */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1vw",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "1.25rem",
                  margin: "0 0 1vh 0",
                }}
                class="service-preview-rating"
              >
                ${parseFloat(service["pricing"]).toFixed(2)}
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "1.25rem",
                  margin: "0 0 1vh 0",
                }}
                class="service-preview-rating"
              >
                ⭐ {calculateRating(service).toFixed(1)}
              </p>
            </div>

            <a
              href={"/profile/" + service["user"]}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h4>
                Posted by:{" "}
                <span style={{ fontWeight: "400" }}>@{service["user_name"]}</span>
              </h4>
            </a>

            <hr></hr>

            <h6>
              Location:{" "}
              <span style={{ fontWeight: "400" }}>
                {service["spec_location"]}
              </span>
            </h6>
            <h6>
              Category:{" "}
              <span style={{ fontWeight: "400" }}>
                {formatCategory(service["category"])}
              </span>
            </h6>
            <p>
              <span style={{ fontWeight: "500" }}>Description</span>:{" "}
              {service["description"]}
            </p>

            <a
              className="sidebar-category"
              href={"/profile/" + service["user"]}
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vh 1vw",
                margin: "0 1vw 0 0",
              }}
            >
              Contact
            </a>

            {/* TODO: Report service functionality */}
            <a
              className="sidebar-category"
              href={"/profile/" + service["user"]}
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vh 1vw",
              }}
            >
              Report
            </a>
          </div>

          {/* Right side of details: thumbnail */}
          <img
            src={service.image}
            alt="Service Preview"
            style={{ width: "30vw" }}
          ></img>
        </div>

        {/* Reviews */}
        {/* TODO: Review submit functionality -> send to DB */}
        <div className="service-page-reviews">
          <hr></hr>
          <h2>Reviews for "{service["title"]}"</h2>
          <h5>
            Rating:{" "}
            <span style={{ fontWeight: "400" }}>
              {calculateRating(service).toFixed(1)}/5.0
            </span>
          </h5>
          <h5>
            Number of Reviews:{" "}
            <span style={{ fontWeight: "400" }}>
              {service["ratings"].length}
            </span>
          </h5>

          {/* Review submission form */}
          <form
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "normal",
              alignItems: "stretch",
              gap: "2vw",
            }}
          >
            <select name="stars" id="review-stars">
              <option value="5.0">5.0</option>
              <option value="4.5">4.5</option>
              <option value="4.0">4.0</option>
              <option value="3.5">3.5</option>
              <option value="3.0">3.0</option>
              <option value="2.5">2.5</option>
              <option value="2.0">2.0</option>
              <option value="1.5">1.5</option>
              <option value="1.0">1.0</option>
              <option value="0.5">0.5</option>
              <option value="0.0">0.0</option>
            </select>
            <input
              id="review-text"
              placeholder="Type your review..."
              autoComplete="off"
            ></input>
            <button
              id="review-submit"
              className="sidebar-category"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vh 1vw",
                margin: "0",
              }}
            >
              Submit
            </button>
          </form>

          {/* Display reviews */}
          {service["ratings"].map((review) => {
            return (
              <Review
                uid={review["user_name"]}
                rating={parseFloat(review["rating"])}
                comment={review["comment"]}
              ></Review>
            );
          })}
          <div style={{ height: "100vh" }}></div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
