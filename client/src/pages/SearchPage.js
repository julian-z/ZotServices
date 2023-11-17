import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import NavBar from "../components/NavBar/NavBar";
import ServicePreview from "../components/ServicePreview/ServicePreview";
import { fetchFromDjango, calculateRating, formatCategory } from "./Helpers";
import { ENDPOINT_URL } from "./Constants";
import openBrowse from "../static/openbrowse.png";
import closeBrowse from "../static/closebrowse.png";

// Search page - allows browsing through services
function SearchPage() {
  // -----------------------------------------------------------
  // FOR MOBILE DESIGN
  const [MOBILE, setMobile] = useState(window.innerWidth <= 768);
  const [showingBrowse, setShowingBrowse] = useState(false);

  const handleResize = () => {
    setMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleMobileBrowseClick() {
    setShowingBrowse(!showingBrowse);
  }
  // -----------------------------------------------------------

  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");
  const [ordering, setOrdering] = useState("none");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Whenever an attribute is changed
  useEffect(() => {
    // Format the endpoint that will be called based on the user's selections
    function formatEndpoint() {
      if (
        (category === "all") &
        (location === "all") &
        (ordering === "none") &
        (query === "")
      ) {
        console.log(ENDPOINT_URL + "/services/");
        return "/services/";
      }

      var queries = [];
      if (category !== "all") {
        queries.push(`category=${category}`);
      }
      if (location !== "all") {
        queries.push(`location=${location}`);
      }
      if (ordering !== "none") {
        queries.push(`ordering=${ordering}`);
      }
      if (query !== "") {
        queries.push(`search=${query}`);
      }
      console.log(ENDPOINT_URL + "/services?" + queries.join("&")); // DEBUG
      return "/services?" + queries.join("&");
    }

    // Asynchronously fetch the data after formatting endpoint
    const fetchData = async (endpoint) => {
      try {
        const data = await fetchFromDjango(endpoint);
        setServices(data);
      } catch (error) {
        console.error("ERROR FETCHING DATA:", error);
      }
    };
    fetchData(formatEndpoint());

    // Remove loading icon
    setLoading(false);
  }, [category, location, ordering, query]);

  // Once a category is chosen
  function fetchCategory(c) {
    if (c === category) {
      return;
    }
    setLoading(true);
    setServices([]);
    setCategory(c);
  }

  // Once a location is chosen
  function fetchLocation(l) {
    if (l === location) {
      return;
    }
    setLoading(true);
    setServices([]);
    setLocation(l);
  }

  // Once an ordering is chosen
  function fetchOrdering(o) {
    console.log(o);
    if (o === ordering) {
      return;
    }
    setLoading(true);
    setServices([]);
    setOrdering(o);
  }

  // Once a query is submitted
  const fetchQuery = () => {
    const q = document.getElementById("sidebar-search").value;
    if (q === query) {
      return;
    }
    setLoading(true);
    setServices([]);
    setQuery(encodeURIComponent(q));
  };

  return (
    <div className="row">
      <NavBar></NavBar>

      {/* Services grid is in a Bootstrap col-9 */}
      <div
        className={MOBILE ? "col-12 services-grid" : "col-9 services-grid"}
        style={{
          padding: "2vh 2vw",
          backgroundColor: "rgb(8, 68, 114)",
          color: "white",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {/* Maps all services to a ServicePreview */}
          {services.map((service) => {
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

          {/* Loading animation */}
          <div
            style={
              loading
                ? {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1vw",
                    width: "100%",
                  }
                : {
                    display: "none",
                  }
            }
          >
            <p style={{ margin: "0", padding: "5vh 0", fontWeight: "500" }}>
              Loading Services...
            </p>
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>

      {/* Sidebar (DESKTOP - fixed position) */}
      <div
        className="col-3 sidebar"
        style={{
          padding: "2vh 2vw",
          overflowY: "auto",
          maxHeight: "90vh",
          position: "fixed",
          top: "10vh",
          right: 0,
          height: "500vh",
          color: "white",
          display: MOBILE ? "none" : "block",
        }}
      >
        <h4>Browse 🔎</h4>

        {/* Search bar (DESKTOP) */}
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: "0.5vw",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            fetchQuery();
          }}
        >
          <input
            placeholder="Search services..."
            autoComplete="off"
            id="sidebar-search"
          />
          <button
            type="submit"
            className="sidebar-category"
            style={{ margin: "0" }}
            id="search-button"
            disabled={loading}
          >
            Search
          </button>
        </form>

        <hr></hr>

        {/* Sort by */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Sort By</h5>
          <select
            className="sidebar-category"
            style={{ width: "100%" }}
            onChange={(e) => fetchOrdering(e.target.value)}
          >
            <option value="none">None</option>
            <option value="+pricing">Price (Low to High)</option>
            <option value="-pricing">Price (High to Low)</option>
            <option value="+average_ratings">Ratings (Low to High)</option>
            <option value="-average_ratings">Ratings (High to Low)</option>
          </select>
        </div>

        <hr></hr>

        {/* Category filter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Categories</h5>
          <button
            className={`sidebar-category ${category === "all" ? "active" : ""}`}
            id="all"
            onClick={() => fetchCategory("all")}
          >
            All
          </button>
          <button
            className={`sidebar-category ${
              category === "automotive" ? "active" : ""
            }`}
            id="automotive"
            onClick={() => fetchCategory("automotive")}
          >
            Automotive
          </button>
          <button
            className={`sidebar-category ${
              category === "arts" ? "active" : ""
            }`}
            id="arts"
            onClick={() => fetchCategory("arts")}
          >
            Arts
          </button>
          <button
            className={`sidebar-category ${
              category === "beauty" ? "active" : ""
            }`}
            id="beauty"
            onClick={() => fetchCategory("beauty")}
          >
            Beauty
          </button>
          <button
            className={`sidebar-category ${
              category === "cleaning" ? "active" : ""
            }`}
            id="cleaning"
            onClick={() => fetchCategory("cleaning")}
          >
            Cleaning
          </button>
          <button
            className={`sidebar-category ${
              category === "clothing" ? "active" : ""
            }`}
            id="clothing"
            onClick={() => fetchCategory("clothing")}
          >
            Clothing
          </button>
          <button
            className={`sidebar-category ${
              category === "deliveries" ? "active" : ""
            }`}
            id="deliveries"
            onClick={() => fetchCategory("deliveries")}
          >
            Deliveries
          </button>
          <button
            className={`sidebar-category ${
              category === "miscellaneous" ? "active" : ""
            }`}
            id="miscellaneous"
            onClick={() => fetchCategory("miscellaneous")}
          >
            Miscellaneous
          </button>
          <button
            className={`sidebar-category ${
              category === "pets" ? "active" : ""
            }`}
            id="pets"
            onClick={() => fetchCategory("pets")}
          >
            Pets
          </button>
        </div>

        <hr></hr>

        {/* Location filter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Location</h5>
          <button
            className={`sidebar-category ${location === "all" ? "active" : ""}`}
            id="all"
            onClick={() => fetchLocation("all")}
          >
            All
          </button>
          <button
            className={`sidebar-category ${
              location === "campus" ? "active" : ""
            }`}
            id="campus"
            onClick={() => fetchLocation("campus")}
          >
            Campus
          </button>
          <button
            className={`sidebar-category ${location === "acc" ? "active" : ""}`}
            id="acc"
            onClick={() => fetchLocation("acc")}
          >
            ACC
          </button>
          <button
            className={`sidebar-category ${location === "utc" ? "active" : ""}`}
            id="utc"
            onClick={() => fetchLocation("utc")}
          >
            UTC
          </button>
          <button
            className={`sidebar-category ${
              location === "other" ? "active" : ""
            }`}
            id="other"
            onClick={() => fetchLocation("other")}
          >
            Other
          </button>
        </div>
      </div>

      {/* Sidebar (MOBILE - click to expand) */}
      <div
        className="col-10 sidebar"
        style={{
          padding: "2vh 2vw",
          overflowY: "auto",
          maxHeight: "90vh",
          position: "fixed",
          top: "10vh",
          right: showingBrowse ? 0 : "-125vw",
          height: "500vh",
          color: "white",
          display: MOBILE ? "block" : "none",
          boxShadow: MOBILE
            ? "0 0 50px rgba(0, 0, 0, 0.5)"
            : "0 0 2px rgba(0, 0, 0, 0.5)",
          transition: "right 0.5s ease-in-out",
        }}
      >
        {/* Click button to expand */}
        <img
          src={showingBrowse ? closeBrowse : openBrowse}
          alt="Open"
          style={{
            display: MOBILE ? "block" : "none",
            position: "fixed",
            bottom: "5vh",
            right: "5vw",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            border: "none",
            width: "auto",
            height: "10vh",
          }}
          onClick={handleMobileBrowseClick}
        ></img>

        <h4>Browse 🔎</h4>

        {/* Search bar (MOBILE) */}
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: "0.5vw",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            fetchQuery();
          }}
        >
          <input
            placeholder="Search services..."
            autoComplete="off"
            id="sidebar-search"
          />
          <button
            type="submit"
            className="sidebar-category"
            style={{ margin: "0" }}
            id="search-button"
            disabled={loading}
          >
            Search
          </button>
        </form>

        <hr></hr>

        {/* Sort by */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Sort By</h5>
          <select
            className="sidebar-category"
            style={{ width: "100%" }}
            onChange={(e) => fetchOrdering(e.target.value)}
          >
            <option value="none">None</option>
            <option value="+pricing">Price (Low to High)</option>
            <option value="-pricing">Price (High to Low)</option>
            <option value="+average_ratings">Ratings (Low to High)</option>
            <option value="-average_ratings">Ratings (High to Low)</option>
          </select>
        </div>

        <hr></hr>

        {/* Category filter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Categories</h5>
          <button
            className={`sidebar-category ${category === "all" ? "active" : ""}`}
            id="all"
            onClick={() => fetchCategory("all")}
          >
            All
          </button>
          <button
            className={`sidebar-category ${
              category === "automotive" ? "active" : ""
            }`}
            id="automotive"
            onClick={() => fetchCategory("automotive")}
          >
            Automotive
          </button>
          <button
            className={`sidebar-category ${
              category === "arts" ? "active" : ""
            }`}
            id="arts"
            onClick={() => fetchCategory("arts")}
          >
            Arts
          </button>
          <button
            className={`sidebar-category ${
              category === "beauty" ? "active" : ""
            }`}
            id="beauty"
            onClick={() => fetchCategory("beauty")}
          >
            Beauty
          </button>
          <button
            className={`sidebar-category ${
              category === "cleaning" ? "active" : ""
            }`}
            id="cleaning"
            onClick={() => fetchCategory("cleaning")}
          >
            Cleaning
          </button>
          <button
            className={`sidebar-category ${
              category === "clothing" ? "active" : ""
            }`}
            id="clothing"
            onClick={() => fetchCategory("clothing")}
          >
            Clothing
          </button>
          <button
            className={`sidebar-category ${
              category === "deliveries" ? "active" : ""
            }`}
            id="deliveries"
            onClick={() => fetchCategory("deliveries")}
          >
            Deliveries
          </button>
          <button
            className={`sidebar-category ${
              category === "miscellaneous" ? "active" : ""
            }`}
            id="miscellaneous"
            onClick={() => fetchCategory("miscellaneous")}
          >
            Miscellaneous
          </button>
          <button
            className={`sidebar-category ${
              category === "pets" ? "active" : ""
            }`}
            id="pets"
            onClick={() => fetchCategory("pets")}
          >
            Pets
          </button>
        </div>

        <hr></hr>

        {/* Location filter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Location</h5>
          <button
            className={`sidebar-category ${location === "all" ? "active" : ""}`}
            id="all"
            onClick={() => fetchLocation("all")}
          >
            All
          </button>
          <button
            className={`sidebar-category ${
              location === "campus" ? "active" : ""
            }`}
            id="campus"
            onClick={() => fetchLocation("campus")}
          >
            Campus
          </button>
          <button
            className={`sidebar-category ${location === "acc" ? "active" : ""}`}
            id="acc"
            onClick={() => fetchLocation("acc")}
          >
            ACC
          </button>
          <button
            className={`sidebar-category ${location === "utc" ? "active" : ""}`}
            id="utc"
            onClick={() => fetchLocation("utc")}
          >
            UTC
          </button>
          <button
            className={`sidebar-category ${
              location === "other" ? "active" : ""
            }`}
            id="other"
            onClick={() => fetchLocation("other")}
          >
            Other
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
