import React, { useState } from 'react';

function Room({ type, price, onSelect }) {
  const [amenities, setAmenities] = useState({
    parking: false,
    breakfast: false,
    wifi: false
  });

  const handleAmenitiesChange = (amenity) => {
    setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
  };

  return (
    <div className="room">
      <h2>{type}</h2>
      <p>Price per night: ${price}</p>
      <label>
        Parking:
        <input
          type="checkbox"
          checked={amenities.parking}
          onChange={() => handleAmenitiesChange('parking')}
        />
      </label>
      <label>
        Breakfast:
        <input
          type="checkbox"
          checked={amenities.breakfast}
          onChange={() => handleAmenitiesChange('breakfast')}
        />
      </label>
      <label>
        WiFi:
        <input
          type="checkbox"
          checked={amenities.wifi}
          onChange={() => handleAmenitiesChange('wifi')}
        />
      </label>
      <button onClick={() => onSelect({ type, price, amenities })}>Select</button>
    </div>
  );
}

export default Room;
