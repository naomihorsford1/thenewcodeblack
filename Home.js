import React from "react";
import { Link} from "react-router-dom";

function Home({ handleLogOut }) {
  return (
    <div className="home">
      <div className="login-divider">
        <h1>Welcome to codeBlack</h1>
        <button className="logout-button" onClick={handleLogOut}>
          Logout
        </button>
        <br></br>

        <Link to="/profile" style={{ textDecoration: 'none' }}>
        <li><h5>profile</h5></li>
                </Link>      </div>
    </div>
  );
}

export default Home;
