import React, {useContext} from "react";
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { IoAddCircle, IoCaretForwardCircle, IoHeartCircle } from "react-icons/io5";
import { ThemeContext } from './ThemeContext';

const MovieCard = ({movieImage, movieTitle, actionText, onAction}) => {
    const { theme } = useContext(ThemeContext);
    const openMovie = () => {} //open a new window to play the movie
    return (
        <Card sx={{ width: 300, 
        borderRadius: 2, 
        backgroundColor: theme === 'light' ? 'white' : '#333',
        overflow: 'visible',
        color: theme === 'light' ? '#000' : '#fff' 
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
                        color: theme === 'light' ? '#333' : 'lightgray'
                        }}>
                        {movieTitle}
                    </Typography>
                    <div className="movie-container-actions">
                        <div className="left-icons">
                            <IoCaretForwardCircle size={35} style={{ color: theme === 'light' ? '#333' : 'lightgray', cursor: 'pointer' }} onClick={openMovie} />
                            <IoAddCircle size={35} style={{ color: theme === 'light' ? '#333' : 'lightgray', cursor: 'pointer' }}/>
                            <IoHeartCircle size={35} style={{ color: theme === 'light' ? '#333' : 'lightgray', cursor: 'pointer' }} />
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
                                        border: `2px solid ${theme === 'light' ? '#333' : 'white'}`,
                                        borderRadius: '4px',
                                        display: 'inline-block',
                                        transition: '0.3s ease',
                                        backgroundColor: theme === 'light' ? '#f0f0f0' : '#444',
                                        color: theme === 'light' ? 'black' : 'white',
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