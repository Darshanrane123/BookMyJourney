import React, { useState } from "react";
import { movies } from "./data.js";
import { ratH } from './ratnagiri.js'; // Import your hotel data
import './Hotels.css';


function Hotels() {
  const [movieList, setMovieList] = useState(movies);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null); // Add state to track selected location

  const filterByCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category === cat));
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setMovieList(filteredMovies);
  };

  const handleLocationClick = (locationTitle) => {
    setSelectedLocation(locationTitle); // Set the clicked location
  };

  const renderHotels = () => {
    // Filter hotels based on the selected location
    const filteredHotels = ratH.filter((hotel) => hotel.title === selectedLocation);

    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Hotels in {selectedLocation}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div
              key={hotel.id}
              style={{
              margin: "20px",
              height:"500px",
              width:"500px",
              textAlign: "center",
              backgroundColor: "#fff", // White background
              borderRadius: "10px", // Rounded corners
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
              padding: "15px", // Padding inside the card
              transition: "transform 0.2s", // Smooth transition for hover effect
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <h2 style={{ margin: "10px 0" }}>{hotel.hname}</h2>
                <img
                  src={hotel.backdrop_path}
                  alt={hotel.title}
                  style={{ width: "100%", height: "150px", borderRadius: "10px", objectFit: "cover" }} // Adjust image fit
                />
                <p style={{ margin: "10px 0" }}>{hotel.description}</p>
              </div>

            ))
          ) : (
            <h3>No hotels available for {selectedLocation}</h3>
          )}
        </div>
        <button
          onClick={() => setSelectedLocation(null)} // Reset the selection to show the movie list again
          className="btn btn-outline-danger mx-3"
          style={{ marginTop: "20px" }}
        >
          Back to Location List
        </button>
      </div>
    );
  };

  return (
    <>
      {selectedLocation ? (
        // If a location is selected, render hotels instead of the search bar and movie list
        renderHotels()
      ) : (
        <>
          <div
            className="my-3"
            style={{ width: "1500px", margin: "auto", marginTop: "15rem" }}
          >
            <div className="mx-auto text-center" style={{ marginTop: "2rem" }}>
              <input
                type="text"
                placeholder="Search places..."
                value={searchQuery}
                onChange={handleSearch}
                style={{ margin: "0 10px", padding: "10px", width: "200px" }}
              />
              <button
                onClick={() => setMovieList(movies)}
                type="button"
                className="btn btn-outline-danger mx-3"
              >
                All
              </button>
              <button
                onClick={() => filterByCategory("Kokan")}
                type="button"
                className="btn btn-outline-danger mx-3"
              >
                Kokan
              </button>
              <button
                onClick={() => filterByCategory("North India")}
                type="button"
                className="btn btn-outline-danger mx-3"
              >
                North India
              </button>
              <button
                onClick={() => filterByCategory("South India")}
                type="button"
                className="btn btn-outline-danger mx-3"
              >
                South India
              </button>
              <button
                onClick={() => filterByCategory("Other")}
                type="button"
                className="btn btn-outline-danger mx-3"
              >
                Other
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              textAlign: "center",
              width: "1515px",
              margin: "auto",
            }}
          >
            {movieList.map((data) => (
              <div
                key={data.id}
                style={{ maxWidth: "200px", textAlign: "center", margin: "20px" , transition: "transform 0.2s", // Smooth transition for hover effect
                                                                                                    
                }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onClick={() => handleLocationClick(data.title)} // Handle click to show hotels
              >
                <div style={{ padding: "10px" }} className="hover_effect">
                  <img
                    src={data.poster_path}
                    alt=""
                    style={{
                      width: "200px",
                      height: "280px",
                      border: "2px solid orange",
                    }}
                  />
                </div>

                <h5>{data.title}</h5>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Hotels;
