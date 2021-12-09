import React from "react";

export default function PlayerUpdate(id, { name, position }) {
  return (
    <form>
      <label>Name:</label>
      <input id="name" type="text" name="name" value="name" />

      <label>Position:</label>
      <input id="position" type="text" name="position" value="position" />

      <button type="submit" aria-label="Update Player">
        update Player
      </button>
    </form>
  );
}
