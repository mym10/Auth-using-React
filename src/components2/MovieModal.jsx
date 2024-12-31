import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const MovieModal = ({ 
    movieImage, 
    movieTitle, 
    movieYear, 
    runtime, 
    genres = [], 
    director,
    open, 
    onClose 
}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    display: 'flex', 
                    flexDirection: 'row', 
                    gap: 2, 
                }}
            >
                <Box sx={{ flexBasis: '30%' }}>
                    <img
                        src={movieImage}
                        alt={movieTitle}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />
                </Box>
                <Box sx={{ flexBasis: '70%' }}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {movieTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        <strong>Year:</strong> {movieYear}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        <strong>Runtime:</strong> {runtime}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        <strong>Genres:</strong> {genres.join(', ')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        <strong>Director:</strong> {director}
                    </Typography>
                </Box>
            </Box>
        </Modal>
    );
};

export default MovieModal;
