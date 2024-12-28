import React, { useState } from 'react';
import MovieCard from '../components2/MovieCard';
import movies from '../movies.json';
import MovieModal from '../components2/MovieModal';
import { IoChevronForwardSharp } from "react-icons/io5";

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieAction = (movie) => {
        setSelectedMovie(movie);
        setModalOpen(true);
    };

    const handleModalToggle = () => {
        setModalOpen(!modalOpen);
    };

    //optional------------------
    const shuffleArray = (array) => {
        let shuffledArray = [...array]; 
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); 
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
        }
        return shuffledArray;
      };
    //-------------------------- 
    return (
        <div className='home-page'>
            <div className="home-page-video">
                <iframe 
                src="https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1&mute=1&loop=1&playlist=d9MyW72ELq0&controls=0&modestbranding=1&rel=0&showinfo=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
                </iframe>
            </div>
            <div className="home-page-content">
                <div className='bar-title'>
                <h2>Watched Movies</h2><IoChevronForwardSharp size={35} style={{ color: 'lightgray' }}/>
                </div>
                <div className='home-user-watches'>
                {movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <MovieCard
                            movieImage={movie.Images[0]}
                            movieTitle={movie.Title}
                            actionText="View Details"
                            onAction={() => handleMovieAction(movie)}
                        />
                    </React.Fragment>
                ))}
                </div>
                <div className='bar-title'>
                <h2>Recommended Movies</h2><IoChevronForwardSharp size={35} style={{ color: 'lightgray' }}/>
                </div>
                <div className='home-recommended'>
                {shuffleArray(movies).map((movie, index) => (
                    <React.Fragment key={index}>
                        <MovieCard
                            movieImage={movie.Images[0]}
                            movieTitle={movie.Title}
                            actionText="View Details"
                            onAction={() => handleMovieAction(movie)}
                        />
                    </React.Fragment>
                ))}
                </div>
                <div className='bar-title'>
                <h2>Top 10 in India</h2><IoChevronForwardSharp size={35} style={{ color: 'lightgray' }}/>
                </div>
                <div className='home-top-10'>
                {shuffleArray(movies).map((movie, index) => (
                    <React.Fragment key={index}>
                        <MovieCard
                            movieImage={movie.Images[0]}
                            movieTitle={movie.Title}
                            actionText="View Details"
                            onAction={() => handleMovieAction(movie)}
                        />
                    </React.Fragment>
                ))}
                </div>
            </div>
            {selectedMovie && (
                <MovieModal
                    movieImage={selectedMovie.Images[2]}
                    movieTitle={selectedMovie.Title}
                    movieYear={selectedMovie.Year}
                    runtime={selectedMovie.Runtime}
                    genres={selectedMovie.Genre}
                    director={selectedMovie.Director}
                    open={modalOpen}
                    onClose={handleModalToggle}
                />
            )}     
        </div>
    );
};

export default Home;