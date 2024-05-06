import { useDispatch, useSelector } from "react-redux"
import Modal from "./Modal"
import ModalLogin from "./ModalLogin"
import { useEffect, useRef } from "react"
import { closeModal } from "../../reduces/modalSlice";
import ModalRegister from "./ModalRegister";

function ModalController() {
    const dispatch = useDispatch();
    const { isOpen, modalType } = useSelector((state) => ({
        isOpen: state.modal.isOpen,
        modalType: state.modal.modalType
      }));
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

    }, [isOpen])
    return (
        <>
        {isOpen &&
        <Modal ref={modalRef}>
            {
                modalType === "login" &&
                <ModalLogin />
            }
            {
                modalType === "register" &&
                <ModalRegister />
            }
        </Modal>
}
        </>
    )
}

export default ModalController