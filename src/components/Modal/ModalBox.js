import React, {useEffect} from 'react';
import './ModalBox.css';
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../store/slices/modal/slice";

const ModalBox = ({showModal,content}) => {
    const dispatch = useDispatch();
    const modalInfo = useSelector(state => state.modal);


    const closeModalBox = () => {
        dispatch(closeModal({content: '', show: false}))
    }

    useEffect(()=> {
        if(modalInfo.show) {
            document.body.classList.add('modal-open');
        }else {
            document.body.classList.remove('modal-open');
        }
    },[modalInfo.show])

    return (
        <>
            {
                modalInfo.show ?
                    <div className="modal-overlay">
                        <div className="modal-wrapper">
                            <div className="modal-inner">
                                <div className="modal-content">
                                    <button className="modal-close" onClick={closeModalBox}>
                                        &times;
                                    </button>
                                    {modalInfo.content}
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    );
};

export default ModalBox;