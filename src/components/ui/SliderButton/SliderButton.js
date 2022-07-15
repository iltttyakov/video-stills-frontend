import React from 'react';
import cls from './SliderButton.module.scss'
import Icons from "../Icons/Icons";


const SliderButton = (
    {
        onClick = () => null,
        direction = 'next',
    }
) => {
    return (
        <button
            onClick={onClick}
            className={[
                cls.button,
                direction === 'prev' ? cls.prev : null
            ].join(' ')}
        >
            <Icons
                name={'arrow'}
                size={16}
                className={cls.icon}
            />
        </button>
    );
};

export default SliderButton;