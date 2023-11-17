import "./ServicePreview.css";

// Component for the service previews (on SearchPage)
function ServicePreview(props) {
  return (
    // Entire component is nested in an anchor which leads to service/:sid
    <a
      href={"/service/" + props.sid}
      style={{ textDecoration: "none" }}
      className="col-4 service-preview"
    >
      {/* Thumbnail provided by user */}
      <img src={props.image} alt="Service Preview"></img>

      {/* Price and rating */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "88%",
          margin: "0",
        }}
      >
        <p
          style={{
            fontWeight: "500",
            margin: "0 0 0 1vw",
            fontSize: "0.75rem",
          }}
          class="service-preview-rating"
        >
          ${props.price.toFixed(2)}
        </p>
        <p
          style={{
            fontWeight: "500",
            margin: "0 1vw 0 0",
            fontSize: "0.75rem",
          }}
          class="service-preview-rating"
        >
          ⭐ {props.rating.toFixed(1)} ({props.numReviews})
        </p>
      </div>

      {/* Name, Location, Category */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "88%",
        }}
      >
        <p style={{ fontWeight: "400", margin: "0 0 0 1vw" }}>{props.title}</p>
        <p
          style={{ fontWeight: "300", fontSize: "0.8rem", margin: "0 0 0 1vw" }}
        >
          {props.location}
        </p>
        <p
          style={{ fontWeight: "300", fontSize: "0.7rem", margin: "0 0 0 1vw" }}
        >
          {props.category}
        </p>
      </div>
    </a>
  );
}

export default ServicePreview;
