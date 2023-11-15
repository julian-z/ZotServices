import React from "react";
import { useParams } from "react-router-dom";

import "./ServicePage.css";

// Display the information and reviews of a service
function ServicePage() {
  const { sid } = useParams();

  return <h1>Service Page for {sid}</h1>;
}

export default ServicePage;
