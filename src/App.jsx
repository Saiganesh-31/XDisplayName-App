import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
    setFirstName("");
    setLastname("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/><br></br>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastname(e.target.value)} required/><br></br>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App
