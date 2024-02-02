import { useState } from "react";
import { formatPostcssSourceMap } from "vite";

function SignUpForm() {
  const [userName, setCount] = useState("");
  const [password, setCxunt] = useState("");
  const [error, setCocunt] = useState(null);

  return (
    <>
      <h2>Sign Up!</h2>
      <form>
        <label htmlFor="User Name">
          User Name: <input name="userName" value={userName}></input>
        </label>
      </form>
    </>
  );
}

export default SignUpForm;
