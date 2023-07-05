import React, { useState } from "react";
import ReactStars from "react-stars";

export default function FilterByRate({ setSearchByRating }) {
  const [show, setShow] = useState(false);
  return (
    <div className="filter-rate">
      <button className="btn-prim" onClick={() => setShow(!show)}>
        Filter by rate
      </button>
      {show && (
        <ReactStars
          onChange={(rate) => setSearchByRating(rate)}
          value={3}
          count={10}
          size={24}
          color2={"#ffd700"}
        />
      )}
    </div>
  );
}
