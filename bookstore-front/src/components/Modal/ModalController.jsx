import { useDispatch, useSelector } from "react-redux"
import Modal from "./Modal"
import ModalLogin from "./ModalLogin"
import { useEffect, useRef } from "react"
import { closeModal } from "../../reduce/modalSlice";

function ModalController() {
    const dispatch = useDispatch();
    const isModal = useSelector((state) => state.modal.isOpen)
    const modalType = useSelector((state) => state.modal.modalType)
    const modalRef = useRef(null)

    useEffect(()=>{
        const handleClickOutside = (e) => {
            if(e.target === modalRef.current) {
                dispatch(
                    closeModal({
                        modalType: "",
                    })
                )
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };

    }, [isModal])
    return (
        <>
        {isModal &&
        <Modal ref={modalRef}>
            {
                modalType === "login" &&
                <ModalLogin />
            }
        </Modal>
}
        </>
    )
}

export default ModalController