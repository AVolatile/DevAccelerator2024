import React, { useState } from 'react';
import Room from './Room';
import BookingForm from './BookingForm';

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const rooms = [
    { type: 'Single Room', price: 100 },
    { type: 'Double Room', price: 200 },
    { type: 'Suite', price: 300 }
  ];

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="App">
      <h1> | DevAccelerator 501 Rooms | </h1>
      <div className="rooms">
        {rooms.map((room, index) => (
          <Room key={index} type={room.type} price={room.price} onSelect={handleRoomSelect} />
        ))}
      </div>
      {selectedRoom && <BookingForm selectedRoom={selectedRoom} />}
    </div>
  );
}

export default App;
