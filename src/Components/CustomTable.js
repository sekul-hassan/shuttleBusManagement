import React from 'react';
import {Table} from "react-bootstrap";

function CustomTable({tableData,tableCation,tableHead}) {
    return (
        <div>
            <h4 className="title text-dark text-center">{tableCation}</h4>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    {
                        tableHead && tableHead.map((th)=>(
                            <th>{th}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    tableData && tableData.map((data, idx) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.to}</td>
                            <td>{data.destination}</td>
                            <td>{data.card}</td>
                            <td>{data.cost}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td className="text-end px-3" colSpan={tableData && tableData.length}>Your Total Cost is : {tableData && (tableData.length) * 10}</td>
                </tr>
                </tbody>

            </Table>
        </div>
    );
}

export default CustomTable;