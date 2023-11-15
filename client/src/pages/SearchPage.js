import React from "react";
import "./SearchPage.css";
import NavBar from "../components/NavBar/NavBar";
import ServicePreview from "../components/ServicePreview/ServicePreview";

// Search page - allows browsing through services
// TODO:
//  - Implement sorting/filtering
//  - Connect to API
//  - Implement infinite scrolling
function SearchPage() {
  // TODO: Use SQL data instead of hardcoded examples
  const services = [
    {
      sid: 1,
      uid: 1,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174411306405736559/image.png?ex=65677ec2&is=655509c2&hm=80aab0c3550427c744e75c27fb7dfa710ddfffd517b3e48760a651a912711fdc&",
      title: "ZotCutz",
      category: "Beauty",
      location: "Stanford Court",
      price: 15.0,
      rating: 5.0,
      description:
        "Line ups, fades, beards, whatever you need. Message me on Instagram (@zotcutz) for available bookings.",
    },

    {
      sid: 2,
      uid: 2,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174411181625180182/image.png?ex=65677ea5&is=655509a5&hm=40f1f7ba08b47a1b74231bfde9a55987abab3d0114a2be8dc13b31af254d22e0&",
      title: "Custom Petr Stickers",
      category: "Arts",
      location: "Middle Earth",
      price: 2.5,
      rating: 4.8,
      description:
        "Will design a custom Petr sticker of your choice! Base price is $2.50, will increase if commission is hefty.",
    },

    {
      sid: 3,
      uid: 3,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174461365931487242/image.png?ex=6567ad62&is=65553862&hm=6257ad854e8c8a2521373cd30106305215f070968e838d822ba77693884176f5&",
      title: "AntNails",
      category: "Beauty",
      location: "Mesa Court",
      price: 20.0,
      rating: 4.3,
      description:
        "Get your nails done by Priscilla Anteater at the Caballo tower! Message me for bookings and location.",
    },

    {
      sid: 4,
      uid: 4,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174410610306461737/image.png?ex=65677e1c&is=6555091c&hm=c488d8cc30ab938741f8cb63f841ec5f584211674c51306b1ab3a43686fea4ff&",
      title: "Floor Cleaning",
      category: "Cleaning",
      location: "Vista Del Campo Norte",
      price: 10.0,
      rating: 4.5,
      description:
        "Professional floor cleaning services provided by VDCN RAs! Must be a VDCN resident to qualify.",
    },

    {
      sid: 5,
      uid: 5,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174410265211715774/image.png?ex=65677dca&is=655508ca&hm=9cd753e4dcc78c51b83abe1757c3ea6c50457e6cf14ff28ca09fa536c75f197e&",
      title: "Discounted DoorDash",
      category: "Delivery",
      location: "Irvine, CA",
      price: 5.0,
      rating: 4.3,
      description:
        "Send me your DoorDash order and I will deliver it for 75% of the price! Note: $5.00 service fee included.",
    },

    {
      sid: 6,
      uid: 6,
      image:
        "https://cdn.discordapp.com/attachments/1174181819793539182/1174410418819694684/image.png?ex=65677def&is=655508ef&hm=df63b290f49666e9cdaf29f1984299d79ce82caf90c8a8de0dc939253d4762ee&",
      title: "Grocery Delivery",
      category: "Delivery",
      location: "Irvine, CA",
      price: 5.0,
      rating: 4.9,
      description:
        "Delivering groceries from any store in Irvine! Most popular: Target, Albertsons, Costco",
    },
  ];

  // TODO: Use React hooks to keep track of filters, query, categories, locations
  // ...

  return (
    <div className="row">
      <NavBar></NavBar>

      {/* Services grid is in a Bootstrap col-9 */}
      <div
        className="col-9 services-grid"
        style={{
          padding: "2vh 2vw",
          backgroundColor: "rgb(8, 68, 114)",
          color: "white",
          height: "125vh",
        }}
      >
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
          {/* Maps all services to a ServicePreview */}
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

          {/* TODO: Infinite scrolling */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1vw",
              width: "100%",
            }}
          >
            <p style={{ margin: "0", padding: "10vh 0", fontWeight: "500" }}>
              Loading more services...
            </p>
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>

      {/* Sidebar (browse, filter, etc) is in a col-3 to the right side */}
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
        }}
      >
        <h4>Browse 🔎</h4>

        {/* Search bar */}
        <form>
          <input
            placeholder="Search by title..."
            autoComplete="off"
            id="sidebar-search"
          ></input>
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
          <button className="sidebar-category">Price</button>
          <button className="sidebar-category">Ratings</button>
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
          <button className="sidebar-category">All</button>
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

        {/* Location filter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h5>Location</h5>
          <button className="sidebar-category">Campus</button>
          <button className="sidebar-category">ACC</button>
          <button className="sidebar-category">UTC</button>
          <button className="sidebar-category">Other</button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
