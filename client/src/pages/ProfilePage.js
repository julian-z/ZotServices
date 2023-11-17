import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ProfilePage.css";
import NavBar from "../components/NavBar/NavBar";
import ServicePreview from "../components/ServicePreview/ServicePreview";
import { fetchFromDjango, calculateRating, formatCategory } from "./Helpers";
import { ENDPOINT_URL, EMPTY_USER } from "./Constants";

// Profile page - displays the seller/buyer account and their public information
function ProfilePage() {
  const { uid } = useParams();
  const [user, setUser] = useState(EMPTY_USER);

  useEffect(() => {
    // Asynchronously fetch the data of /users/:uid
    const fetchData = async (endpoint) => {
      try {
        const data = await fetchFromDjango(endpoint);
        setUser(data);
      } catch (error) {
        console.error("ERROR FETCHING DATA:", error);
      }
    };
    console.log(ENDPOINT_URL + `/users/${uid}/`);
    fetchData(`/users/${uid}/`);
  }, [uid]);

  return (
    <div>
      <NavBar></NavBar>

      <div>
        <div className="profile-page-details">
          <img
            src={user["profile_pic"]}
            alt="Profile Avatar"
            id="profile-pic"
          ></img>

          <div>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <h6>@{user["user"]["username"]}</h6>

            <hr></hr>

            <h4>Contact</h4>
            <h6>
              E-Mail: <span style={{ fontWeight: "400" }}>{user["email"]}</span>
            </h6>
            <h6>
              Phone: <span style={{ fontWeight: "400" }}>{user["phone"]}</span>
            </h6>

            <hr></hr>

            {/* TODO: Report functionality */}
            <a
              className="sidebar-category"
              href={"/profile/" + uid}
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vh 1vw",
              }}
            >
              Report
            </a>
          </div>
        </div>

        <hr></hr>

        {/* Services offered by user */}
        <div className="profile-page-services">
          {/* Maps all services to a ServicePreview */}
          {user["services"].map((service) => {
            return (
              <ServicePreview
                sid={service["id"]}
                uid={service["user"]}
                image={service["image"]}
                title={service["title"]}
                category={formatCategory(service["category"])}
                location={service["spec_location"]}
                price={parseFloat(service["pricing"])}
                rating={calculateRating(service)}
                numReviews={service["ratings"].length}
              ></ServicePreview>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
