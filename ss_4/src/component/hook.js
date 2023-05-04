import React from "react";
import { useState } from "react";

function Hook() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const handleFirstName = (firstNameHandle) => {
    setFirstName(firstNameHandle);
  }
  const handleLastName = (lastNameHandle) => {
    setLastName(lastNameHandle)
  }

  return (
    <div>
      <div className="input-group mt-3">
        <span className="input-group-text" id="basic-addon1">
          First Name
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="First Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => handleFirstName(event.target.value)}
        />
      </div>
      <br />
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Last Name
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Last Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => handleLastName(event.target.value)}
        />
      </div>
      <p>
        Hello,{' '}
        <span>{firstName} {lastName}</span>
      </p>
    </div>
  );
}

export default Hook;
