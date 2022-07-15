import React from 'react';
import cls from './Loader.module.scss'


const Loader = (
    {
        isLoading = false,
        children,
    }
) => {
    return (
        isLoading
            ? <div className={cls.container}>
                <div className={cls.ring}/>
            </div>
            : children
    );
};

export default Loader;