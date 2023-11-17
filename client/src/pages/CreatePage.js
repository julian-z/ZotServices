import React, { useState } from "react";

import "./CreatePage.css";
import NavBar from "../components/NavBar/NavBar";
import { useCookies } from 'react-cookie';

function CreatePage() {
  const [token] = useCookies(['mr-token'])
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [spec_location, setLocationName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [image, setImage] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', title);
    console.log(formDataToSend);
    formDataToSend.append('location', location);
    formDataToSend.append('image', image, image.name);
    formDataToSend.append('spec_location', spec_location);
    formDataToSend.append('category', category);
    formDataToSend.append('description', description);
    formDataToSend.append('price', price);

    try {
      fetch('http://localhost:8000/api/services/1/create_service/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token['mr-token']}`

        },
        body: formDataToSend,
      })
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, e.g., show an error message
    }
    console.log("Form submitted:", {
      title,
      location,
      spec_location,
      category,
      description,
      price,
    });
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div>
      <NavBar></NavBar>

      <div className="create-page">
        <form className="create-page-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Create a Service</h1>

          <hr></hr>

          <div className="create-page-half-form">
            <div className="create-page-label-input col-6">
              {/* Input for service title */}
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Car detailing, haircuts..."
                required
                style={{ margin: "0", width: "100%" }}
              />
            </div>

            <div className="create-page-label-input col-5">
              {/* Attach image */}
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
                style={{
                  margin: "0",
                  boxShadow: "0 0 0 black",
                  backgroundColor: "rgb(68, 68, 68)",
                }}
              />
            </div>
          </div>

          <div className="create-page-half-form">
            <div className="create-page-label-input col-3">
              {/* Dropdown for location (e.g., Campus, ACC, UTC, Other) */}
              <label htmlFor="location">Location:</label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                <option value="Campus">Campus</option>
                <option value="ACC">ACC</option>
                <option value="UTC">UTC</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="create-page-label-input col-8">
              {/* Input for location name (e.g., Middle Earth) */}
              <label htmlFor="spec_location">Specific Location:</label>
              <input
                type="text"
                id="spec_location"
                value={spec_location}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="Mesa Court, Middle Earth, Stanford Court..."
              />
            </div>
          </div>

          {/* Dropdown for category (e.g., All, Beauty, etc) */}
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Automotive">Automotive</option>
            <option value="Arts">Arts</option>
            <option value="Beauty">Beauty</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Clothing">Clothing</option>
            <option value="Deliveries">Deliveries</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Pets">Pets</option>
            {/* Add more categories as needed */}
          </select>

          {/* Input for description */}
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Preferred payment and contact method, availability, price changes..."
          />

          {/* Input float for price */}
          <label htmlFor="price">Price (USD):</label>
          <input
            type="number"
            id="price"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            required
          />

          <hr></hr>

          {/* Submit button */}
          <button className="create-page-button" type="submit">
            Create Service
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
