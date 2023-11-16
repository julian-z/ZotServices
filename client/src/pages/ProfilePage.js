import React from "react";
import { useParams } from "react-router-dom";

import "./ProfilePage.css";
import NavBar from "../components/NavBar/NavBar";
import ServicePreview from "../components/ServicePreview/ServicePreview";

// Profile page - displays the seller/buyer account and their public information
function ProfilePage() {
  const { uid } = useParams();

  // TODO: Placeholder services
  const services = [
    {
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

    {
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

    {
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
  ];

  return (
    <div>
      <NavBar></NavBar>

      <div>
        <div className="profile-page-details">
          {/* TODO: Replace with image of user uid */}
          <img
            src="https://cdn.discordapp.com/attachments/1174181819793539182/1174506430141837402/image.png?ex=6567d75a&is=6555625a&hm=1f2dbea067d124024d4194549774a65063e000e77ede664afb552593259a6763&"
            alt="Profile Avatar"
            style={{ width: "20vw" }}
          ></img>

          <div>
            {/* TODO: Replace with name of user uid */}
            <h2>Peter Anteater</h2>
            <h6>@peterant</h6>

            <hr></hr>

            {/* TODO: Replace with contact info */}
            <h4>Contact</h4>
            <h6>
              E-Mail:{" "}
              <span style={{ fontWeight: "400" }}>panteater@uci.edu</span>
            </h6>
            <h6>
              Instagram: <span style={{ fontWeight: "400" }}>@pete_eats</span>
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

        {/* Services offered by user */}
        <div className="profile-page-services">
          {/* TODO: Replace with user's services */}
          {/* Maps all services to a ServicePreview */}
          {services.map((service) => {
            return (
              <ServicePreview
                sid={service["sid"]}
                uid={service["uid"]}
                image={service["image"]}
                title={service["title"]}
                category={service["category"]}
                location={service["location"]}
                price={service["price"]}
                rating={service["rating"]}
              ></ServicePreview>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
