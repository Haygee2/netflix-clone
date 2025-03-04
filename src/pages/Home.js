import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import './Home.css'; // Ensure Home.css is imported if it exists

function Home() {
  const movies = [
    { id: 1, name: 'Movie 1', poster: '/pictures/movie1.jpg' }, // Update with correct path
    { id: 2, name: 'Movie 2', poster: '/pictures/movie2.jpg' }, // Update with correct path
    { id: 3, name: 'Movie 3', poster: '/pictures/movie3.jpg' }, // Update with correct path
    { id: 4, name: 'Movie 4', poster: '/pictures/movie4.jpg' }, // Update with correct path
    { id: 5, name: 'Movie 5', poster: '/pictures/movie5.jpg' }, // Update with correct path
    { id: 6, name: 'Movie 6', poster: '/pictures/movie6.jpg' }, // Update with correct path
  ];

  console.log('Movies array:', movies); // Add console log

  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Row title="Trending Now" movies={movies} imageStyle={{ width: '150px', height: '200px' }} />
      <Row title="Top Rated" movies={movies} imageStyle={{ width: '150px', height: '200px' }} />
      {/* Add more rows as needed */}
    </div>
  );
}

export default Home;
