import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import CloseIcon from '@mui/icons-material/HighlightOff';

/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);

    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        store.closeCurrentList();
    }
    
    let undoStatus = false;
    let redoStatus = false;
    let closeStatus = true;

    if (!store.undoActive){
        undoStatus = true
    }
    if (!store.redoActive){
        redoStatus = true
    }
    if (store.currentList !== null){
        closeStatus = false
    }
    if (store.isItemEditActive){
        undoStatus = false
        redoStatus = false
        closeStatus = false
    }

    return (
        <div id="edit-toolbar">
            <Button 
                id='undo-button'
                onClick={handleUndo}
                disabled={undoStatus}
                variant="contained">
                    <UndoIcon />
            </Button>
            <Button 
                id='redo-button'
                onClick={handleRedo}
                disabled={redoStatus}
                variant="contained">
                    <RedoIcon />
            </Button>
            <Button 
                disabled={closeStatus}
                id='close-button'
                onClick={handleClose}
                variant="contained">
                    <CloseIcon />
            </Button>
        </div>
    )
}

export default EditToolbar;