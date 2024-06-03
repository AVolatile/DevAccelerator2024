import React from 'react';

// Room component represents an individual room.
// Props are used to pass the room type, price, and a callback function for selection.
function Room({ type, price, onSelect }) {
  return (
    <div className="room">
      {/* JSX used to structure the room information */}
      <h2>{type}</h2>
      <p>Price per night: ${price}</p>
      {/* onClick event triggers the onSelect callback with the room type */}
      <button onClick={() => onSelect(type)}>Select</button>
    </div>
  );
}

export default Room;
