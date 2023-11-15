import "./ServicePreview.css";

function ServicePreview(props) {
  return (
    <a
      href={"/service/" + props.sid}
      style={{ color: "black", textDecoration: "none" }}
      className="col-4 service-preview"
    >
      <img src={props.image} alt="Service Preview"></img>

      <p style={{ fontWeight: "500", margin: "0 0 0 1vw" }}>{props.price}</p>
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
