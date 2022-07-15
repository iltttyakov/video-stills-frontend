import React, {useEffect, useRef} from 'react';
import cls from './Modal.module.scss'

const Modal = (
    {
        isOpen = false,
        onClose = () => null,
        children
    }
) => {
    const ref = useRef()

    const handleClickOutsideBox = (event) => {
        if (
            isOpen
            && ref.current
            && !ref.current.contains(event.target)
        ) onClose()
    }


    return (
        <>
            <div
                className={[
                    cls.overlay,
                    isOpen ? cls.open : null
                ].join(' ')}
                onClick={onClose}
            />
            <div
                className={[
                    cls.container,
                    isOpen ? cls.open : null
                ].join(' ')}
                onClick={handleClickOutsideBox}
            >

                <div className={cls.box} ref={ref}>
                    {children}
                </div>

            </div>
        </>
    );
};

export default Modal;