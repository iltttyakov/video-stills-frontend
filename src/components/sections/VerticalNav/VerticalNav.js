import React from 'react';
import cls from './VerticalNav.module.scss'
import {NavLink} from "react-router-dom";

const paths = [
    {
        name: 'Видео',
        active: true,
    },
    {
        name: 'Пункт меню',
    },
    {
        name: 'Ещё один пункт',
    },
    {
        name: 'Последний пункт',
    },
]


const VerticalNav = () => {
    return (
        <nav className={cls.box}>
            <ul className={cls.list}>
                {
                    paths.map((item, index) => (
                        <li className={cls.item} key={index}>
                            <span className={[
                                cls.link,
                                item.active ? cls.active : null
                            ].join(' ')}>
                                {item.name}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default VerticalNav;