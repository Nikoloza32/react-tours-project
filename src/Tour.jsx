import React, { useState } from "react";

export const Tour = ({ id, image, name, info, price, tours, setTours }) => {
  const [readMore, setReadMore] = useState(false);

  const removeItem = (id) => {
    const newItem = tours.filter((tour) => tour.id !== id);
    setTours(newItem);
  };
  return (
    <div className="tour">
      <div className="tour-header">
        <img className="tour-image" src={image} alt={name} />
        <span className="tour-price">$ {price}</span>
      </div>
      <div className="tour-main">
        <div className="tour-name">
          <h2 className="name">{name}</h2>
        </div>
        <div className="tour-info">
          <p className="info">{readMore ? info : info.substring(0, 150)}</p>
          <button
            onClick={() => setReadMore(!readMore)}
            className="readmore-button"
          >
            readmore
          </button>
        </div>
      </div>
      <button className="tour-delete-button" onClick={() => removeItem(id)}>
        not interes
      </button>
    </div>
  );
};
