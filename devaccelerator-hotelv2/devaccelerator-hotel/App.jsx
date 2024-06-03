import React, { useState } from 'react';
import Room from './Room';
import BookingForm from './BookingForm';

// App component is the main component that manages the application state and logic.
function App() {
  // State for the selected room
  const [selectedRoom, setSelectedRoom] = useState(null);
  // Array of room objects with type and price
  const rooms = [
    { type: 'Single Room', price: 100 },
    { type: 'Double Room', price: 200 },
    { type: 'Suite', price: 300 }
  ];

  // Find the price of the selected room
  const roomPrice = selectedRoom ? rooms.find(room => room.type === selectedRoom).price : 0;

  return (
    <div className="App">
      {/* JSX used to structure the main application */}
      <h1> | DevAccelerator 501 Rooms | </h1>
      <div className="rooms">
        {/* Iterate over rooms array to render Room components */}
        {rooms.map(room => (
          // Props (type, price, onSelect) are passed to each Room component as props
          <Room key={room.type} type={room.type} price={room.price} onSelect={setSelectedRoom} />
        ))}
      </div>
      {/* Conditionally render BookingForm if a room is selected */}
      {selectedRoom && <BookingForm selectedRoom={selectedRoom} roomPrice={roomPrice} />}
    </div>
  );
}

export default App;
