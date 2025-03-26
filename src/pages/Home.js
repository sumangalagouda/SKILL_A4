// src/pages/Home.js
import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import RecommendedMovies from "../components/RecommendedMovies"; // Import Recommended Movies
import RecommendedEvents from "../components/RecommendedEvents"; // Import Recommended Events
import "../index.css";

function Home() {
  return (
    <div className="home-page">
      {/* Carousel Section */}
      <CarouselComponent />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Experience Movies, Events & Sports Like Never Before!</h1>
          <p>Book tickets for your favorite movies, concerts, and sports events now.</p>
          <button className="btn btn-danger">Book Tickets</button>
        </div>
      </div>

      {/* Recommended Movies Section */}
      <RecommendedMovies />

      {/* Recommended Events Section */}
      <RecommendedEvents />
    </div>
  );
}

export default Home;
