// src/pages/Offers.js
import React from "react";

function Offers() {
  return (
    <div className="main-content text-center">
      <h2>Exclusive Offers</h2>
      <p>Get amazing discounts on movies, events, and sports bookings.</p>
      <div className="offers-list d-flex justify-content-center">
        <div className="offer-card">
          <img src="/images/offer1.jpg" alt="Offer 1" />
          <h4>Buy 1 Get 1 Free</h4>
          <p>Valid on selected movie tickets.</p>
          <button className="btn btn-danger">Claim Offer</button>
        </div>
        <div className="offer-card">
          <img src="/images/offer2.jpg" alt="Offer 2" />
          <h4>20% Off on Sports</h4>
          <p>Use code: SPORT20</p>
          <button className="btn btn-danger">Claim Offer</button>
        </div>
      </div>
    </div>
  );
}

export default Offers;
