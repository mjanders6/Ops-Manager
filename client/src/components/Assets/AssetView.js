import React from 'react';
import { Table } from 'react-bootstrap';

const AssetTable = ({ assetData }) =>
    <Table responsive striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Category</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            {assetData.map(row => (
                <tr id={row._id} key={row._id}>
                    <td>{row._id}</td>
                    <td>{row.Type}</td>
                    <td>{row.Category}</td>
                    <td>{row.Location}</td>
                </tr>
            ))}
        </tbody>
    </Table>

    export default AssetTable;