import React from 'react';
import './Table.css';

import Loading from '../Loading/Loading';

const Table = ({ results, onDelete, refresh }) => {
    if (!results) {
        return <Loading />;
    } 
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Description</th>
                        <th>Date of release</th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(results).map((item, i) => 
                    <tr key={i} className="table-row">
                        <td>{results[item].name}</td>
                        <td>{results[item].language}</td>
                        <td>{results[item].description}</td>
                        <td>{results[item].initRelease}</td>
                        <td><button onClick={() => onDelete(results[item].id)}>Delete</button></td>
                    </tr>
                )}
                </tbody>
            </table>
            <button onClick={() => refresh()}>Refresh</button>
        </>
    ); 
}

export default Table;