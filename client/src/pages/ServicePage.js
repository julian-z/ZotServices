import React from "react";
import { useParams } from "react-router-dom";

import "./ServicePage.css";
import NavBar from "../components/NavBar/NavBar";
import Review from "../components/Review/Review";

// Display the information and reviews of a service
function ServicePage() {
  const { sid } = useParams();

  // TODO: Replace placeholder with actual service from SQL DB
  const services = {
    1: {
      sid: 1,
      uid: 1,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174411306405736559/image.png?ex=65677ec2&is=655509c2&hm=80aab0c3550427c744e75c27fb7dfa710ddfffd517b3e48760a651a912711fdc&",
      title: "ZotCutz",
      category: "Beauty",
      location: "Stanford Court",
      price: 15.0,
      rating: 5.0,
      description:
        "Line ups, fades, beards, whatever you need. Message me on Instagram (@zotcutz) for available bookings.",
    },

    2: {
      sid: 2,
      uid: 2,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174411181625180182/image.png?ex=65677ea5&is=655509a5&hm=40f1f7ba08b47a1b74231bfde9a55987abab3d0114a2be8dc13b31af254d22e0&",
      title: "Custom Petr Stickers",
      category: "Arts",
      location: "Middle Earth",
      price: 2.5,
      rating: 4.8,
      description:
        "Will design a custom Petr sticker of your choice! Base price is $2.50, will increase if commission is hefty.",
    },

    3: {
      sid: 3,
      uid: 3,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174461365931487242/image.png?ex=6567ad62&is=65553862&hm=6257ad854e8c8a2521373cd30106305215f070968e838d822ba77693884176f5&",
      title: "AntNails",
      category: "Beauty",
      location: "Mesa Court",
      price: 20.0,
      rating: 4.3,
      description:
        "Get your nails done by Priscilla Anteater at the Caballo tower! Message me for bookings and location.",
    },

    4: {
      sid: 4,
      uid: 4,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174410610306461737/image.png?ex=65677e1c&is=6555091c&hm=c488d8cc30ab938741f8cb63f841ec5f584211674c51306b1ab3a43686fea4ff&",
      title: "Floor Cleaning",
      category: "Cleaning",
      location: "Vista Del Campo Norte",
      price: 10.0,
      rating: 4.5,
      description:
        "Professional floor cleaning services provided by VDCN RAs! Must be a VDCN resident to qualify.",
    },

    5: {
      sid: 5,
      uid: 5,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174410265211715774/image.png?ex=65677dca&is=655508ca&hm=9cd753e4dcc78c51b83abe1757c3ea6c50457e6cf14ff28ca09fa536c75f197e&",
      title: "Discounted DoorDash",
      category: "Delivery",
      location: "Irvine, CA",
      price: 5.0,
      rating: 4.3,
      description:
        "Send me your DoorDash order and I will deliver it for 75% of the price! Note: $5.00 service fee included.",
    },

    6: {
      sid: 6,
      uid: 6,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174410418819694684/image.png?ex=65677def&is=655508ef&hm=df63b290f49666e9cdaf29f1984299d79ce82caf90c8a8de0dc939253d4762ee&",
      title: "Grocery Delivery",
      category: "Delivery",
      location: "Irvine, CA",
      price: 5.0,
      rating: 4.9,
      description:
        "Delivering groceries from any store in Irvine! Most popular: Target, Albertsons, Costco",
    },
  };
  const service = services[sid];

  // TODO: Replace placeholder reviews with actual reviews
  const reviews = [
    {
      uid: 1,
      rating: 5.0,
      comment: "Awesome!",
    },
    {
      uid: 2,
      rating: 4.5,
      comment: "Cool!",
    },
    {
      uid: 3,
      rating: 3.0,
      comment: "Mid...",
    },
    {
      uid: 4,
      rating: 5.0,
      comment: "So epic!",
    },
    {
      uid: 5,
      rating: 4.0,
      comment: "Decent.",
    },
  ];

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
                ${service["price"].toFixed(2)}
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "1.25rem",
                  margin: "0 0 1vh 0",
                }}
                class="service-preview-rating"
              >
                ⭐ {service["rating"].toFixed(1)}
              </p>
            </div>

            <a
              href={"/profile/" + service["uid"]}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h4>
                Posted by:{" "}
                <span style={{ fontWeight: "400" }}>User {service["uid"]}</span>
              </h4>
            </a>

            <hr></hr>

            <h6>
              Location:{" "}
              <span style={{ fontWeight: "400" }}>{service["location"]}</span>
            </h6>
            <h6>
              Category:{" "}
              <span style={{ fontWeight: "400" }}>{service["category"]}</span>
            </h6>

            <hr></hr>

            <p>
              <span style={{ fontWeight: "500" }}>Description</span>:{" "}
              {service["description"]}
            </p>

            <hr></hr>

            <a
              className="sidebar-category"
              href={"/profile/" + service["uid"]}
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vh 1vw",
                margin: "0 1vw 0 0",
              }}
            >
              Contact
            </a>

            {/* TODO: Report functionality */}
            <a
              className="sidebar-category"
              href={"/profile/" + service["uid"]}
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
        {/* TODO: Call API to get reviews and populate HTML */}
        {/* TODO: Review submit functionality -> send to DB */}
        <div className="service-page-reviews">
          <hr></hr>
          <h2>Reviews for "{service["title"]}"</h2>
          <h5>
            Rating:{" "}
            <span style={{ fontWeight: "400" }}>
              {service["rating"].toFixed(1)}/5.0
            </span>
          </h5>
          <h5>
            Number of Reviews: <span style={{ fontWeight: "400" }}>???</span>
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
              }}
            >
              Submit
            </button>
          </form>

          {/* Display reviews */}
          {reviews.map((review) => {
            return (
              <Review
                uid={review["uid"]}
                rating={review["rating"]}
                comment={review["comment"]}
              ></Review>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
