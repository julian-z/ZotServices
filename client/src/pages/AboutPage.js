import React from "react";

import "./AboutPage.css";
import NavBar from "../components/NavBar/NavBar";
import Developer from "../components/Developer/Developer";

// AboutPage - form to post a new service
function AboutPage() {
  return (
    <div>
      <NavBar></NavBar>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2vh",
            textAlign: "center",
            padding: "2vh 2vw",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>ZotServices ⚒️</h1>
            <h3>
              <em>Always Ant Your Service!</em>
            </h3>
          </div>

          <div className="about-page-developers">
            <h2>Meet Our Team 👋</h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "stretch",
                gap: "2vh",
                textAlign: "center",
                padding: "2vh 2vw",
              }}
            >
              <Developer
                name="Simon Cao"
                title="Full-Stack Developer"
                image={1}
              ></Developer>
              <Developer
                name="Julian Zulfikar"
                title="Front-End Developer"
                image={0}
              ></Developer>
              <Developer
                name="Alvin Phan"
                title="Back-End Developer"
                image={2}
              ></Developer>
              <Developer
                name="Manjot Singh"
                title="Back-End Developer"
                image={3}
              ></Developer>
            </div>
          </div>

          <div className="about-page-text">
            <p
              style={{
                textAlign: "center",
                fontSize: "1.25rem",
                marginBottom: "5vh",
              }}
            >
              ☝️ Have you ever struggled to find that perfect barber near UCI?
              Perhaps, you're looking for someone to watch your dog while you're
              at home for Winter break. Whatever it is, ZotServices has got it
              covered!
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.25rem",
                marginBottom: "5vh",
              }}
            >
              🕓 As UCI students, we understand that every minute counts when it
              comes to managing the busy student life. Made for students by
              students, we plan to offer a platform that connects students with
              quick & nearby services to make life on campus a breeze.
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.25rem",
                marginBottom: "5vh",
              }}
            >
              🫂 Our goal at ZotServices is to be a central community center
              where students can post their unique side hustles and services.
              Imagine being able to grab a cheap yet stylish haircut near campus
              or having someone else tackle the grocery shopping while you focus
              on your studies!
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.25rem",
                marginBottom: "5vh",
              }}
            >
              🤝 Whether you're a student with a talent to share or someone in
              need of a helping hand, ZotServices is the bridge that brings UCI
              students together. Join ZotServices today and experience the
              convenience of a connected campus community!
            </p>
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
              Developed by Julian Zulfikar, Simon Cao, Alvin Phan, and Manjot
              Singh for WebJam 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
