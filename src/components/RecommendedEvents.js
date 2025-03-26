import React from "react";
import "./RecommendedMovies.css"; // Add styles
import { FaThumbsUp, FaStar } from "react-icons/fa"; // Icons for like and rating
import evnt3 from "./evnt3.avif";
import evnt from "./evnt.avif";
import evnt2 from "./evnt2.avif";
import evnt4 from "./evnt4.avif";
import event3 from "./evnt3.avif";

const events = [
  {
    id: 1,
    title: "Music Concert Night",
    genre: "Live Concert",
    likes: "428.2K",
    image: evnt3,
    promoted: true,
  },
  {
    id: 2,
    title: "Stand-up Comedy Show",
    genre: "Comedy",
    likes: "318.9K",
    image: evnt,
  },
  {
    id: 3,
    title: "Cultural Fest",
    genre: "Cultural",
    rating: "9.5/10",
    votes: "38.2K",
    image: evnt2,
  },
  {
    id: 4,
    title: "Art & Craft Exhibition",
    genre: "Exhibition",
    likes: "31.8K",
    image: evnt4,
  },
  {
    id: 5,
    title: "Food Carnival",
    genre: "Food & Drinks",
    rating: "7/10",
    votes: "819",
    image: event3,
  },
];

function RecommendedEvents() {
  return (
    <div className="movies-section">
      <div className="movies-header">
        <h2>Recommended Events</h2>
        <a href="https://example.com" className="see-all">See All &gt;</a>
      </div>

      <div className="movies-container">
        {events.map((event) => (
          <div key={event.id} className="movie-card">
            <div className="movie-image">
              <img src={event.image} alt={event.title} />
              {event.promoted && <span className="promoted-badge">PROMOTED</span>}
            </div>
            <div className="movie-info">
              {event.likes ? (
                <p className="likes"><FaThumbsUp /> {event.likes} Likes</p>
              ) : (
                <p className="rating"><FaStar className="star-icon" /> {event.rating} {event.votes} Votes</p>
              )}
              <h3>{event.title}</h3>
              <p className="genre">{event.genre}</p>

              {/* Book Now Button */}
              <div className="movie-buttons">
                <button className="primary-btn">Book Now</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedEvents;
