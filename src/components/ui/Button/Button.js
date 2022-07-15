import React from 'react';
import cls from './Button.module.scss'
import Icons from "../Icons/Icons";


const Button = (
    {
        onClick = () => null,
        icon = null,
        className = null,
        children
    }
) => {
    return (
        <button
            className={[
                cls.button,
                className,
                icon ? cls.withIcon : null
            ].join(' ')}
            onClick={onClick}
        >
            <span>{children}</span>
            {
                icon
                    ? <Icons
                        name={icon}
                        className={cls.icon}
                        size={16}
                    />
                    : null
            }
        </button>
    );
};

export default Button;