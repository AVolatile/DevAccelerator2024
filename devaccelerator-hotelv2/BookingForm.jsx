import React, { useState } from 'react';

function BookingForm({ selectedRoom }) {
  const [dates, setDates] = useState({
    checkInDate: '',
    checkOutDate: ''
  });
  const [bookingStatus, setBookingStatus] = useState('');

  const amenitiesPrice = Object.values(selectedRoom.amenities).reduce((acc, amenity) => {
    return acc + (amenity ? 10 : 0); // Assuming each amenity costs $10
  }, 0);

  const handleDateChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    // Add logic to check availability based on selected dates and amenities
    // Update booking status accordingly
    const totalPrice = selectedRoom.price + amenitiesPrice;
    setBookingStatus(`Room booked successfully for ${dates.checkInDate} to ${dates.checkOutDate} with amenities. Total price: $${totalPrice}`);
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <p>Selected Room: {selectedRoom.type}</p>
      <label>
        Check-in Date:
        <input
          type="date"
          name="checkInDate"
          value={dates.checkInDate}
          onChange={handleDateChange}
        />
      </label>
      <label>
        Check-out Date:
        <input
          type="date"
          name="checkOutDate"
          value={dates.checkOutDate}
          onChange={handleDateChange}
        />
      </label>
      <p>Amenities Price: ${amenitiesPrice}</p>
      <p>Room Price: ${selectedRoom.price}</p>
      <button onClick={handleBooking}>Book Room</button>
      {bookingStatus && <p>{bookingStatus}</p>}
    </div>
  );
}

export default BookingForm;
