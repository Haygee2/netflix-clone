import React from 'react';
import './Banner.css';

function Banner() {
  console.log('Banner component rendered'); // Add console log

  return (
    <header className="banner" style={{ backgroundImage: 'url("https://example.com/banner.jpg")' }}>
      <div className="banner__contents">
        <h1 className="banner__title">Movie Title</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          This is a brief description of the movie.
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
