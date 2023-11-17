import React from "react";
import NavBar from "../components/NavBar/NavBar";

// 404 Error Page (user navigated to a nonexistent page)
function NoPage() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Error - No Page Found</h1>
    </div>
  );
}

export default NoPage;
