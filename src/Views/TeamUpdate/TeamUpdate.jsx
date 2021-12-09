import React from "react";

export default function TeamUpdate(id, { name, state, city }) {
  return (
    <form>
      <label>Name:</label>
      <input id="name" type="text" name="name" value="name" />

      <label>City:</label>
      <input id="city" type="text" name="city" value="city" />

      <label>State:</label>
      <input id="state" type="text" name="state" value="state" />

      <button type="submit" aria-label="Update team">
        Update team.
      </button>
    </form>
  );
}
