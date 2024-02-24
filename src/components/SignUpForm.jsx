import { useState } from "react";
import axios from "axios";

function SignUpForm({ token, setToken }) {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",

        { username: userName, password: password }
      );
      setToken(result.data.token);
      console.log(token);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="User Name">
          User Name:{" "}
          <input
            name="userName"
            value={userName}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;
