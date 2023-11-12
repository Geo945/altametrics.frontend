import React from 'react';
import { Modal, Box } from '@mui/material';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

import * as styles from './styles';

type ModalPopUpProps = {
    open: boolean;
    handleClose: () => void;
    handleSubmit: () => void;
    title: string;
    children: JSX.Element;
    submitBtnLabel: string;
    submitBtnColor?: string;
    cancelBtnLabel?: string;
    isSubmitDisabled?: boolean;
    center?: boolean;
};

const ModalPopUp = ({
    open,
    handleClose,
    handleSubmit,
    title,
    children,
    submitBtnLabel,
    submitBtnColor = 'primary',
    cancelBtnLabel,
    isSubmitDisabled,
    center = true,
}: ModalPopUpProps) => {
    return (
        <Modal
            data-testid="modal"
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
        >
            <Box sx={styles.box}>
                <ModalHeader
                    title={title}
                    handleClose={handleClose}
                    center={center}
                />
                {children}
                <ModalFooter
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                    submitBtnLabel={submitBtnLabel}
                    submitBtnColor={submitBtnColor}
                    cancelBtnLabel={cancelBtnLabel}
                    isSubmitDisabled={isSubmitDisabled}
                />
            </Box>
        </Modal>
    );
};

export default ModalPopUp;
