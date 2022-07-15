import React from 'react';
import cls from './Table.module.scss'

const Table = ({columns, data}) => {
    return (
        <div className={cls.box}>
            <table className={cls.table}>
                <thead className={cls.head}>
                <tr className={cls.row}>
                    {
                        columns.map((column, index) => (
                            <th key={index} className={cls.headCell}>
                                {column.title}
                            </th>
                        ))
                    }
                </tr>
                </thead>
                <tbody className={cls.body}>
                {
                    data && data.length
                        ? data.map((row, index) => (
                            <tr key={index} className={cls.row}>
                                {
                                    columns.map((column, index) => (
                                        <td key={index} className={[
                                            cls.cell,
                                            column.align === 'right' ? cls.alignRight : null
                                        ].join(' ')}>
                                            {column.render(row)}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                        : <tr className={cls.row}>
                            <td className={cls.cell}>Записи не найдены</td>
                        </tr>
                }
                </tbody>
            </table>
        </div>
    );
};

export default Table;