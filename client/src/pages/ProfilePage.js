import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { uid } = useParams();

  return <h1>Profile Page for {uid}</h1>;
}

export default ProfilePage;
