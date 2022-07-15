import React from 'react';
import cls from './PlayButton.module.scss'
import Icons from "../Icons/Icons";


const PlayButton = (
    {
        onClick = () => null,
    }
) => {
    return (
        <button
            className={cls.button}
            onClick={onClick}
        >
            <Icons
                className={cls.icon}
                name={'play'}
                size={16}
            />
        </button>
    );
};

export default PlayButton;