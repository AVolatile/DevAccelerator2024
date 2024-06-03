import React, { useState } from 'react';

// BookingForm component handles the booking details.

// Hooks (useState) are used to manage the number of days state and booking status.
function BookingForm({ selectedRoom, roomPrice }) {
 
    // State for the number of days the user wants to stay (State refers to data that is managed within the component)
  const [days, setDays] = useState(1); // useState is the Hook
  
  // State to manage booking status
  const [bookingStatus, setBookingStatus] = useState();

  // Calculate total price based on the number of days and room price
  const totalPrice = days * roomPrice;

  // Function to handle booking
  const handleBooking = () => {
    setBookingStatus(`${selectedRoom} booked successfully for ${days} day(s) at $${totalPrice}.`);
  };

  return (
    <div className="booking-form">
      {/* JSX used to structure the booking form */}
      <h2>Booking Form</h2>
      <p>Selected Room: {selectedRoom}</p>
      <p>Price per night: ${roomPrice}</p>
      <label>
        Number of days:
        {/* Controlled component with value and onChange to update days state (can be specified by the user) */}
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          min="1"
        />
      </label>
      <p>Total Price: ${totalPrice}</p>
      {/* Button to book the room */}
      <button onClick={handleBooking}>Book Room</button>
      {/* Display booking status message */}
      {bookingStatus && <p>{bookingStatus}</p>}
    </div>
  );
}

export default BookingForm;
