import React from 'react';
import cls from './FramesModal.module.scss'
import {useSelector} from "react-redux";
import Modal from "../../ui/Modal/Modal";
import rootActions from "../../../redux/rootActions";
import BinaryImage from "../../ui/BinaryImage/BinaryImage";
import Loader from "../../ui/Loader/Loader";

const FramesModal = () => {
    const framesModalIsOpen = useSelector(state => state.videos.framesModalIsOpen)
    const framesListIsLoading = useSelector(state => state.videos.framesListIsLoading)
    const frames = useSelector(state => state.videos.framesList)

    return (
        <Modal
            isOpen={framesModalIsOpen}
            onClose={rootActions.videos.framesModalClose}
        >
            <div className={cls.header}>
                <h3 className={cls.title}>Формирование кадра для обучения</h3>
            </div>

            <Loader isLoading={framesListIsLoading}>
                <ul className={cls.list}>
                    {
                        frames.length
                            ? frames.map((frame, index) => (
                                <li className={cls.item} key={index}>
                                    <BinaryImage
                                        className={cls.image}
                                        data={frame}
                                    />
                                    <p className={cls.itemName}>
                                        Кадр {index + 1}
                                    </p>
                                </li>
                            ))
                            : null
                    }
                </ul>
            </Loader>
        </Modal>
    );
};

export default FramesModal;