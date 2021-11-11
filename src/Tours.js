import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>Ours Tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tours.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
}

export default Tours;
