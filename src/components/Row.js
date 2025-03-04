import React from 'react';
import './Row.css';

function Row({ title, movies, isLargeRow, imageStyle }) {
  console.log('Row component rendered with title:', title); // Add console log
  console.log('Movies in Row:', movies); // Add console log

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={movie.poster}
            alt={movie.name}
            style={imageStyle}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
