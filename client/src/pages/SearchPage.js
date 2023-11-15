import React from "react";
import "./SearchPage.css";
import NavBar from "../components/NavBar/NavBar";
import ServicePreview from "../components/ServicePreview/ServicePreview";

function SearchPage() {
  const services = [
    {
      sid: 1,
      uid: 1,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174181828916154439/image.png?ex=6566a90b&is=6554340b&hm=41254e7c8ff7c8d1b1929f23579ccbb639806556907af62439d66aae82a7bec5&",
      title: "ZotCutz",
      category: "Beauty",
      location: "Stanford Court",
      price: "$15 - $20",
      rating: "5.0",
    },

    {
      sid: 2,
      uid: 2,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174191758008127568/image.png?ex=6566b24a&is=65543d4a&hm=2880fa4111e6c77ca779abdebad4fc202860b4555215782576105944b1910e9e&",
      title: "Custom Petr Stickers",
      category: "Arts",
      location: "Middle Earth",
      price: "$2",
      rating: "4.8",
    },

    {
      sid: 3,
      uid: 3,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174191805382803537/2020-01-14.png?ex=6566b255&is=65543d55&hm=62b89f18852446f865459fea7bcc71faab846cb0e5942a5cfc623b3eeadd9c36&",
      title: "Nails",
      category: "Beauty",
      location: "Mesa Court",
      price: "$20 - $30",
      rating: "4.3",
    },

    {
      sid: 4,
      uid: 4,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174208557630115880/image.png?ex=6566c1ef&is=65544cef&hm=b97010b838322440be75c085b8f649bb645371a1278cdc2561a5db8ebdc838c5&",
      title: "Floor Cleaning",
      category: "Cleaning",
      location: "Vista Del Campo Norte",
      price: "$10",
      rating: "4.5",
    },

    {
      sid: 5,
      uid: 5,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174209918291681330/image.png?ex=6566c334&is=65544e34&hm=0e4cd2b190ea180b96fc05656b58df7ebf44fbcee67d020c15a2f34077d0c14f&",
      title: "Discounted DoorDash",
      category: "Delivery",
      location: "Irvine, CA",
      price: "$10",
      rating: "4.3",
    },

    {
      sid: 6,
      uid: 6,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174209356175253544/image.png?ex=6566c2ae&is=65544dae&hm=f55dc527d4da539e229e3bb867ef4ebef9cce214c4b1ca4e8cd3faf1e97f051c&",
      title: "Grocery Delivery",
      category: "Delivery",
      location: "Irvine, CA",
      price: "$5",
      rating: "4.9",
    },
  ];

  return (
    <div className="row">
      <NavBar></NavBar>

      <div className="col-9" style={{ padding: "2vh 2vw" }}>
        <h2>All Services</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
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

      <div className="col-3 sidebar" style={{ padding: "2vh 2vw" }}>
        <h4>Browse 🔎</h4>

        <form>
          <input placeholder="Search by title..." id="sidebar-search"></input>
        </form>

        <hr></hr>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Sort By</h5>
          <button className="sidebar-category">Price</button>
          <button className="sidebar-category">Ratings</button>
        </div>

        <hr></hr>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Categories</h5>
          <button className="sidebar-category">All Categories</button>
          <button className="sidebar-category">Automotive</button>
          <button className="sidebar-category">Arts</button>
          <button className="sidebar-category">Beauty</button>
          <button className="sidebar-category">Cleaning</button>
          <button className="sidebar-category">Clothing</button>
          <button className="sidebar-category">Deliveries</button>
          <button className="sidebar-category">Miscellaneous</button>
          <button className="sidebar-category">Pets</button>
        </div>

        <hr></hr>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Location</h5>
          <button className="sidebar-category">On-Campus</button>
          <button className="sidebar-category">ACC Apartments</button>
          <button className="sidebar-category">UTC Apartments</button>
          <button className="sidebar-category">Other</button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
