import React from 'react';
import './App.css';
import {Table} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Table bordered >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Заголовок</th>
                    <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default App;
