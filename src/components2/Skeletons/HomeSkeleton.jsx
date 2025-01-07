import React from 'react';

const HomeSkeleton = () => {
  return (
    <div className="home-skeleton">
        <div className='carousel-skeleton'></div>
      <div className="search-results-skeleton">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="movie-card-skeleton">
            <div className="movie-image-skeleton skeleton"></div>
            <div className="movie-title-skeleton skeleton"></div>
            <div className="movie-action-skeleton skeleton"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSkeleton;