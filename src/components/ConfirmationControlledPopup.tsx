import {useState} from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "../styles/Modal.css"

function ConfirmationControlledPopup() {
    const [open, setOpen] = useState(false)
    function closeModal() {
        setOpen(false)
    }

    return(
        <>
            <button type="submit" className="button" onClick={() => setOpen(o => !o)}>
                Save
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a className="close" onClick={closeModal}>&times;</a>
                    Employee created !
                </div>
            </Popup>
        </>
    )
}

export default ConfirmationControlledPopup