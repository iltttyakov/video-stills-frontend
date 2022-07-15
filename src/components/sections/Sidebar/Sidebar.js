import React from 'react';
import cls from './Sidebar.module.scss'
import VerticalNav from "../VerticalNav/VerticalNav";


const Sidebar = ({className = null}) => {
    return (
        <aside className={[cls.box, className].join(' ')}>
            <VerticalNav/>
        </aside>
    );
};

export default Sidebar;