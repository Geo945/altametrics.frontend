import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ModalHeader = (props: {
    title: string;
    handleClose: () => void;
    center: boolean;
}) => {
    const { title, handleClose, center } = props;

    return (
        <Grid container justifyContent="space-between">
            <Grid item style={center ? { margin: 'auto' } : {}}>
                <Typography
                    variant="h6"
                    data-testid="modalTitle"
                    sx={{ fontWeight: 'bold' }}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon
                            data-testid="modalCloseIcon"
                            style={{ color: 'red' }}
                        />
                    </IconButton>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ModalHeader;
