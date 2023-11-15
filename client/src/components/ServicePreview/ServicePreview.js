import "./ServicePreview.css";

function ServicePreview(props) {
  return (
    <a
      href={"/service/" + props.sid}
      style={{ color: "black", textDecoration: "none" }}
      className="col-4 service-preview"
    >
      <img src={props.image} alt="Service Preview"></img>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
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
          {props.price}
        </p>
        <p
          style={{
            fontWeight: "500",
            margin: "0 0 0 1vw",
            fontSize: "0.75rem",
          }}
          class="service-preview-rating"
        >
          ⭐ {props.rating}
        </p>
      </div>
      <p style={{ fontWeight: "400", margin: "0 0 0 1vw" }}>{props.title}</p>
      <p style={{ fontWeight: "300", fontSize: "0.8rem", margin: "0 0 0 1vw" }}>
        {props.location}
      </p>
      <p style={{ fontWeight: "300", fontSize: "0.7rem", margin: "0 0 0 1vw" }}>
        {props.category}
      </p>
    </a>
  );
}

export default ServicePreview;
