import React from "react";
import "../styles.css";
import { FaThumbsUp, FaStar } from "react-icons/fa"; // Icons for like and rating
import eventsection1 from "./eventsection1.avif";
import eventsection2 from "./eventsection2.avif";
import eventsection3 from "./eventsection3.avif";
import eventsection4 from "./eventsection4.avif";
import eventsection5 from "./eventsection5.avif";

const events = [
  {
    id: 1,
    title: "Karthik live at GYLT!",
    genre: "GYLT: Bengaluru",
    likes: "428.2K",
    image: eventsection1,
    promoted: true,
  },
  {
    id: 2,
    title: "JP NAGAR COMEDY",
    genre: "Klaworkz Barista",
    likes: "318.9K",
    image: eventsection2,
  },
  {
    id: 3,
    title: "Guns N' Roses: India 2025",
    genre: "Mahalaxmi",
    rating: "9.5/10",
    votes: "38.2K",
    image: eventsection3,
  },
  {
    id: 4,
    title: "Gaurav Gupta Live",
    genre: "Fan Park, Phoenix Mall",
    likes: "31.8K",
    image: eventsection4,
  },
  {
    id: 5,
    title: "Papon Live @AAB Bohagi",
    genre: "Phoenix Market City",
    rating: "7/10",
    votes: "819",
    image: eventsection5,
  },
];

function Events() {
  return (
    <div className="movies-section">
      <div className="movies-header">
        <h2>Events</h2>
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

export default Events;
