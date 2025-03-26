import React, { useState } from "react";
import "./RecommendedMovies.css"; // Add styles
import { FaThumbsUp, FaStar } from "react-icons/fa"; // Icons for like and rating
import movie2 from "./movie2.avif";
import movie2b from "./movie2b.avif";
import movie2c from "./movie2c.avif";
import movie2d from "./movie2d.avif";
import movie2e from "./movie2e.avif";

const movies = [
  {
    id: 1,
    title: "L2: Empuraan",
    genre: "Action/Crime/Thriller",
    likes: "428.2K",
    image: movie2,
    promoted: true,
    trailerUrl: "https://www.youtube.com/embed/tGCnglJGElk?si=Jr-UBaRcJ3Y9Fr17",
  },
  {
    id: 2,
    title: "Sikandar",
    genre: "Action/Drama",
    likes: "318.9K",
    image: movie2b,
    trailerUrl: "https://www.youtube.com/embed/BAk5ZCoTWY8?si=EJsjCpoSFEO5zaey",
  },
  {
    id: 3,
    title: "Court: State vs A Nobody",
    genre: "Drama/Thriller",
    rating: "9.5/10",
    votes: "38.2K",
    image: movie2c,
  },
  {
    id: 4,
    title: "Veera Dheera Sooran",
    genre: "Action/Thriller",
    likes: "31.8K",
    image: movie2d,
  },
  {
    id: 5,
    title: "Snow White",
    genre: "Adventure/Drama/Family/Musical",
    rating: "7/10",
    votes: "819",
    image: movie2e,
    trailerUrl: "https://www.youtube.com/embed/iV46TJKL8cU?si=4dB3DLQPo5xvUUBH",
  },
];

function RecommendedMovies() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState("");

  const handleWatchTrailer = (trailerUrl) => {
    setCurrentTrailer(trailerUrl);
    setShowTrailer(true);
  };

  return (
    <div className="movies-section">
      <div className="movies-header">
        <h2>Recommended Movies</h2>
        <a href="#" className="see-all">See All &gt;</a>
      </div>

      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-image">
              <img src={movie.image} alt={movie.title} />
              {movie.promoted && <span className="promoted-badge">PROMOTED</span>}
            </div>
            <div className="movie-info">
              {movie.likes ? (
                <p className="likes"><FaThumbsUp /> {movie.likes} Likes</p>
              ) : (
                <p className="rating"><FaStar className="star-icon" /> {movie.rating} {movie.votes} Votes</p>
              )}
              <h3>{movie.title}</h3>
              <p className="genre">{movie.genre}</p>

              {/* Buttons Section */}
              <div className="movie-buttons">
                <button className="primary-btn">Book Now</button>
                {movie.trailerUrl && (
                  <button className="secondary-btn" onClick={() => handleWatchTrailer(movie.trailerUrl)}>
                    Watch Trailer
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <span className="close-btn" onClick={() => setShowTrailer(false)}>&times;</span>
            <iframe
              width="560"
              height="315"
              src={currentTrailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecommendedMovies;
