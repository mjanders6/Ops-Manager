import React, { Component } from 'react';
import { Table } from 'reactstrap';
import QtyButton from '../QtyButton/QtyButton'

const AssetTable = ({ assetData }) => {
    return (
        <div>
            <Table striped bordered responsize hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>test</th>
                    </tr>
                </thead>
                <tbody>
                    {assetData.map(row => (
                        <tr id={row._id} key={row._id}>
                            <td>{row._id}</td>
                            <td>{row.Type}</td>
                            <td>{row.Category}</td>
                            <td>{row.Location}</td>
                            <td>{<QtyButton />}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default AssetTable;