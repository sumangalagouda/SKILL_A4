import React from "react";

function Register() {
  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <p>Sign up to book your favorite movies and events.</p>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;