import React, {useState} from "react";
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { IoAdd, IoCaretForward, IoHeart } from "react-icons/io5";

const MovieCard = ({movieImage, movieTitle, actionText, onAction, theme, currentTheme, movie}) => {
    const openMovie = () => {} //open a new window to play the movie

    const [isClicked, setIsClicked] = useState(() => 
        JSON.parse(localStorage.getItem("favourites"))?.some(fav => fav.Title === movie.Title) || false 
    )
    const handleClick = () => {
        setIsClicked(!isClicked);
        let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        if (!isClicked) {
            favourites.push(movie); //add to favourites
        } else {
            favourites = favourites.filter(fav => fav.Title !== movie.Title); //remove from favourites
        }
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }

    return (
        <Card sx={{ width: 300, 
        borderRadius: 2, 
        backgroundColor: theme ==='light' ? 'lightgray' : '#333',
        overflow: 'visible',
        color: theme ==='light' ? '#333' : 'lightgray'
        }}>
            <CardContent sx={{ "&:last-child": { padding: 0} }}>
                <div className="movie-container">
                    <img src={movieImage} alt={movieTitle} />
                    <Typography variant="h5" component="h3" sx={{ 
                        textAlign: 'left', 
                        marginTop: '3px', 
                        fontFamily: "Poppins", 
                        fontWeight: 500, 
                        width:'270px', 
                        whiteSpace: 'nowrap', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        color: theme ==='light' ? '#333' : 'lightgray'
                        }}>
                        {movieTitle}
                    </Typography>
                    <div className="movie-container-actions">
                        <div className="left-icons">
                            <IoCaretForward size={30} style={{ color: theme ==='light' ? '#333' : 'lightgray', cursor: 'pointer' }} onClick={openMovie} />
                            <IoAdd size={30} style={{ color: theme ==='light' ? '#333' : 'lightgray', cursor: 'pointer' }} />
                            <IoHeart size={30} style={{ color: isClicked ? '#990f02' : theme ==='light' ? '#333' : 'lightgray', cursor: 'pointer'}} onClick={handleClick} />
                        </div>
                        <div className="action-text">
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <Typography 
                                    variant="body2" 
                                    color="lightgray" 
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: '15px',
                                        fontFamily: "Poppins",
                                        cursor: 'pointer',
                                        padding: '5px 5px',
                                        border: `2px solid ${theme ==='light' ? '#333' : 'lightgray'}`,
                                        borderRadius: '4px',
                                        display: 'inline-block',
                                        transition: '0.3s ease',
                                        backgroundColor: currentTheme.background,
                                        color: currentTheme.color,
                                        '&:hover': { 
                                            backgroundColor: theme === 'light' ? '#ddd' : 'black', 
                                            color: theme === 'light' ? 'black' : 'white' 
                                        }
                                    }} 
                                    onClick={onAction}
                                >
                                    {actionText}
                                </Typography>
                            </CardActions>
                        </div>
                    </div>
                </div>
            </CardContent> 
        </Card>
    );
}

export default MovieCard;