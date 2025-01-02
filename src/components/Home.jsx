import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components2/MovieCard';
import movies from '../movies.json';
import MovieModal from '../components2/MovieModal';
import { IoChevronForwardSharp } from "react-icons/io5";
import { ThemeContext } from '../components2/ThemeContext';

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

    const { theme } = useContext(ThemeContext);
    const gradientColor = theme === 'dark'
        ? 'linear-gradient(to bottom, rgba(20, 25, 36, 0) 0%, #141924 100%)'
        : 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, #DDE9F3 100%)';

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
    //drop down
    const [selectedGenre, setSelectedGenre] = useState("Select Genre");

    const genres = ["Action","Comedy","Drama","Horror","Romance","Sci-Fi","Thriller","Fantasy","Animation","Documentary"];

    const navigate = useNavigate();

    const handleGenreChange = (e) => {
        const genre = e.target.value;
        setSelectedGenre(genre);
        navigate(`/search?q=${encodeURIComponent(genre)}`);
    };

    return (
        <div className='home-page' style={{backgroundColor: theme === 'light' ? '#DDE9F3' : '#141924', color: theme === 'light' ? '#000' : '#fff'}}>
            <div className="home-page-video">
                <iframe 
                src="https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1&mute=1&loop=1&playlist=d9MyW72ELq0&controls=0&modestbranding=1&rel=0&showinfo=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
                </iframe>
                <div
                style={{
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100vw',
                    height: '15%',
                    background: gradientColor,
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />
            </div>
            <div className="home-page-content">
                <div className="dropdown-container">
                    <select
                        className="dropdown"
                        value={selectedGenre}
                        onChange={handleGenreChange}
                        style={{
                            backgroundColor: theme === 'light' ? '#fff' : '#333',
                            color: theme === 'light' ? '#000' : '#fff',
                            border: `1px solid ${theme === 'light' ? '#ccc' : '#444'}`,
                        }}
                    >
                        <option disabled>Select Genre</option>
                        {genres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                        ))}
                    </select>
                </div>
                <div className='bar-title' style={{ borderBottom: `${theme === 'light' ? '#ccc' : '#444'}` }}>
                <h2>Watched Movies</h2><IoChevronForwardSharp size={35} style={{ color: theme === 'light' ? '#000' : 'lightgray', cursor: 'pointer' }} />
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
                <div className='bar-title' style={{ borderBottom: ` ${theme === 'light' ? '#ccc' : '#444'}` }}>
                <h2>Recommended Movies</h2><IoChevronForwardSharp size={35} style={{ color: theme === 'light' ? '#000' : 'lightgray', cursor: 'pointer' }}/>
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
                <div className='bar-title' style={{ borderBottom: `${theme === 'light' ? '#ccc' : '#444'}` }}>
                <h2>Top 10 in India</h2><IoChevronForwardSharp size={35} style={{ color: theme === 'light' ? '#000' : 'lightgray', cursor: 'pointer' }}/>
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