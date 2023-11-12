import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import * as styles from './styles';

const ModalFooter = (props: {
    handleClose: () => void;
    handleSubmit: () => void;
    submitBtnLabel: string;
    submitBtnColor: string;
    cancelBtnLabel?: string;
    isSubmitDisabled?: boolean;
}) => {
    const {
        handleClose,
        handleSubmit,
        submitBtnLabel,
        submitBtnColor,
        cancelBtnLabel,
        isSubmitDisabled,
    } = props;

    const cancelLabel = cancelBtnLabel ?? 'cancel';

    return (
        <Grid container justifyContent="end">
            <Grid item>
                <Button
                    data-testid="modalCancelButton"
                    variant="outlined"
                    onClick={handleClose}
                    sx={{ mr: 2 }}
                    color="inherit"
                >
                    {cancelLabel}
                </Button>
            </Grid>
            <Grid item>
                <Button
                    sx={() => styles.customButton(submitBtnColor)}
                    data-testid="modalCustomButton"
                    disabled={isSubmitDisabled}
                    variant="contained"
                    onClick={handleSubmit}
                >
                    {submitBtnLabel}
                </Button>
            </Grid>
        </Grid>
    );
};

export default ModalFooter;
