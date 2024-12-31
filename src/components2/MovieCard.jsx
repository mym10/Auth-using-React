import React from "react";
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { IoAddCircle, IoCaretForwardCircle, IoHeartCircle } from "react-icons/io5";

const MovieCard = ({movieImage, movieTitle, actionText, onAction}) => {
    return (
        <Card sx={{ width: 350, borderRadius: 2, backgroundColor: 'transparent', overflow: 'visible'}}>
            <CardContent sx={{ "&:last-child": { padding: 0} }}>
                <div className="movie-container">
                    <img src={movieImage} alt={movieTitle} />
                    <Typography variant="h5" component="h3" sx={{ textAlign: 'left', marginTop: '3px', fontFamily: "Poppins", fontWeight: 500, width:'270px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'lightgray' }}>
                        {movieTitle}
                    </Typography>
                    <div className="movie-container-actions">
                        <div className="left-icons">
                            <IoCaretForwardCircle size={35} style={{ color: 'lightgray' }} />
                            <IoAddCircle size={35} style={{ color: 'lightgray' }} />
                            <IoHeartCircle size={35} style={{ color: 'lightgray' }} />
                        </div>
                        <div className="action-text">
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <Typography 
                                    variant="body2" 
                                    color="lightgray" 
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: '15px',
                                        cursor: 'pointer',
                                        padding: '5px 10px',
                                        border: '2px solid white',
                                        borderRadius: '4px',
                                        display: 'inline-block',
                                        transition: '0.3s ease',
                                        '&:hover': { backgroundColor: 'lightgray', color: 'black' }
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