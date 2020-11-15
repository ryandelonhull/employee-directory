import React from "react";
import Data from "./Data.js";
import TableRow from "./TableRow.js"
import Table from 'react-bootstrap/Table';


function RandoTable (users, sortColumn) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Profile Picture</th>
                <th onClick={()=> {sortColumn(name.tolowerCase())}}>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date of Birth</th>
                </tr>
            </thead>
            <TableRow users={users} />
        </Table>
    )
}
export default RandoTable;