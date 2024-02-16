import React from 'react';
import {Table} from "react-bootstrap";

function UserTable({tableCation,userHead,userData}) {
    return (
        <div>
            <h4 className="title text-dark text-center">{tableCation}</h4>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    {
                        userHead && userHead.map((th)=> (
                            <th>{th}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <tr>
                    {
                        userData && userData.map((td)=>(
                            <td>{td}</td>
                        ))
                    }
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default UserTable;
