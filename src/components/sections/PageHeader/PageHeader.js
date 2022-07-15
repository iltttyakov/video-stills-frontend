import React from 'react';
import cls from './PageHeader.module.scss'


const PageHeader = ({title = null, className = null}) => {
    return (
        <header className={[cls.box, className].join(' ')}>
            {
                title
                    ? <h1 className={cls.title}>
                        {title}
                    </h1>
                    : null
            }
        </header>
    );
};

export default PageHeader;