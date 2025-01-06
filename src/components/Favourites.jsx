import React, {useState, useEffect} from 'react';
import MovieCard from '../components2/MovieCard';
import MovieModal from '../components2/MovieModal';
import { useNavigate } from 'react-router-dom';

const Favourites = ({ theme, currentTheme }) => {
    const [favouriteMovies, setFavouriteMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleMovieAction = (movie) => {
        setSelectedMovie(movie);
        setModalOpen(true);
    };

    useEffect(() => {
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavouriteMovies(favourites);
    }, []);

    //navigate button
    const navigate = useNavigate();
    const onAction = () => {
        navigate('/home');
    }

    const handleModalToggle = () => {
        setModalOpen(!modalOpen);
    };

    //button styles
    const buttonStyles = {
        backgroundColor: currentTheme.color === '#fff' ? '#333' : 'lightgray',
        color: currentTheme.color === '#fff' ? 'lightgray' : '#333',
        border: currentTheme.color === '#fff' ? '1px solid white' : '1px solid black',
        fontSize: '20px'
    };

    return(
        <div className='favourite-page'>
            <h2>Favourites</h2>
            <div className='favourite-results'>
                {favouriteMovies.length > 0 ? (
                favouriteMovies.map((movie, index) => (
                    <MovieCard
                    key={index}
                    movie={movie}
                    movieImage={movie.Images[0]}
                    movieTitle={movie.Title}
                    actionText="View Details"
                    onAction={() => handleMovieAction(movie)}
                    theme={theme}
                    currentTheme={currentTheme}
                />
                 ))
            ):(
                <div className='no-favourites'>
                    <h3>Nothing in your favourite list!</h3>
                    <p>Browse more movies and add them to your favourites</p>
                    <button
                        className="button"
                        onClick={onAction}
                        style={{ ...buttonStyles, width: "200px", marginTop: "10px" }}
                    >Watch Now!
                    </button>
                </div>
            )}
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
                    theme={theme}
                    currentTheme={currentTheme}
                />
            )} 
        </div>
    );
};

export default Favourites;