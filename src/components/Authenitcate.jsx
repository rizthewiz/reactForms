import axios from "axios";
import { useState } from "react";

function Authenticate({ token }) {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const results = await response.json();
      setMessage(
        `${results.message} Congrats New User: ${results.data.username}`
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {message && <p>{message}</p>}
      {error && <p>{error} Please fill out form.</p>}
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Authenticate Token
      </button>
    </>
  );
}

export default Authenticate;
