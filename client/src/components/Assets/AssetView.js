import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Table, Button, Input } from 'reactstrap';
import QtyButton from '../QtyButton/QtyButton'

const AssetTable = ({ assetData, toggle, toggleInput, toggleid }) => {
    return (
        <div>
            <Table striped bordered responsize hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Sub Category</th>
                        <th>Qty</th>
                        <th>Cost</th>
                        <th>Quality</th>
                        {sessionStorage.getItem('status') != '0' ? <th>Edit</th> : ""}
                    </tr>
                </thead>
                <tbody>
                    {assetData.map(row => (
                        <tr id={row._id} key={row._id}>
                            <td id={row._id}>{row._id}</td>
                            <td id={row._id}>{row.Type} {toggleInput != false && toggleid == row._id ? <Input id="type" type="text" name="search" /> : ""}</td> {/* value={type} onChange={handleInputChange} */}
                            <td id={row._id}>{row.Category} {toggleInput != false && toggleid == row._id ? <Input id="category" type="text" name="search"/> : ""}</td> {/* value={category} onChange={handleInputChange} */}
                            <td id={row._id}>{row.Location} {toggleInput != false && toggleid == row._id ? <Input id="location" type="text" name="search"/> : ""}</td> {/* value={location} onChange={handleInputChange} */}
                            <td id={row._id}>{row.SubCategory} {toggleInput != false && toggleid == row._id ? <Input id="subcategory" type="text" name="search"/> : ""}</td> {/* value={subcategory} onChange={handleInputChange} */}
                            <td id={row._id}>{row.QTY} {toggleInput != false && toggleid == row._id ? <Input id="qty" type="text" name="search"/> : ""}</td> {/* value={qty} onChange={handleInputChange} */}
                            <td id={row._id}>{row.Cost} {toggleInput != false && toggleid == row._id ? <Input id="cost" type="text" name="search"/> : ""}</td> {/* value={cost} onChange={handleInputChange} */}
                            <td id={row._id}>{row.Quality} {toggleInput != false && toggleid == row._id ? <Input id="quality" type="text" name="search"/> : ""}</td> {/* value={quality} onChange={handleInputChange} */}
                            {sessionStorage.getItem('status') != '0' ? <td><Button id={row._id} key={row._id} onClick={toggle} color="primary">Edit</Button></td> : ""}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default AssetTable;