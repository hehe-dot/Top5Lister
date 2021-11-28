import { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

/*
    This modal is shown when the user asks to delete a list. Note 
    that before this is shown a list has to be marked for deletion,
    which means its id has to be known so that we can retrieve its
    information and display its name in this modal. If the user presses
    confirm, it will be deleted.
    
    @author McKilla Gorilla
*/

export default function DeleteModal(props) {
    const { store } = useContext(GlobalStoreContext);
    var open = false
    let name = "";
    if (store.currentList) {
        name = store.currentList.name;
    }
    function handleDeleteList(event) {
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        open = false
        store.unmarkListForDeletion();
    }

    if (store.listMarkedForDeletion){
        name = store.listMarkedForDeletion.name
        open = true
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                data-animation="slideInOutLeft"
            >
                <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="info">
                <AlertTitle> Delete the {name} Top 5 List?</AlertTitle>
                </Alert>
                <div id="confirm-cancel-container">
                    <Button onClick={handleDeleteList}>Confirm</Button>
                    <Button onClick={handleCloseModal}>Cancel</Button>
                </div>
                </Stack>
                </Typography>
                </Box>
            </Modal>
            </div>
    );
}