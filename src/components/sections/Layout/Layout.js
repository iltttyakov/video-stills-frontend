import React from 'react';
import cls from './Layout.module.scss'
import Sidebar from "../Sidebar/Sidebar";
import PageHeader from "../PageHeader/PageHeader";


const Layout = ({title = null, children}) => {
    return (
        <div className={cls.box}>

            <Sidebar className={cls.sidebar}/>

            <div className={cls.content}>
                <PageHeader
                    title={title}
                    className={cls.header}
                />
                <main className={cls.main}>
                    {children}
                </main>
            </div>

        </div>
    );
};

export default Layout;