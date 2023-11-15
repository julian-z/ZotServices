import React from "react";
import { useParams } from "react-router-dom";

import "./ProfilePage.css";
import NavBar from "../components/NavBar/NavBar";

// Profile page - displays the seller/buyer account and their public information
function ProfilePage() {
  const { uid } = useParams();

  return (
    <div>
      <NavBar></NavBar>

      <h1>Profile Page for {uid}</h1>
    </div>
  );
}

export default ProfilePage;
