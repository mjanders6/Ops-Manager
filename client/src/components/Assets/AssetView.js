import React, { useState } from 'react';
import Select from "react-select";
import { Table, Button, Input, Row } from 'reactstrap';
import QtyButton from '../QtyButton/QtyButton'

const AssetTable = ({ assetData, toggle, toggleInput, toggleid, categoryData }) => {

    const [category, setCategory] = useState('Set Category');
    const [type, setType] = useState('Set Type');
    const [typeList, setTypeList] = useState([]);

    // handle change event of the country dropdown
    const handleCategoryChange = (obj) => {
        setCategory(obj);
        setTypeList(obj.type);
        setType(null);
    };

    const handleTypeChange = (obj) => {
        setType(obj);
    };

    return (
        <div>
            <Table striped bordered responsize hover>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Category</th>
                        <th>Type</th>
                        <th>Sub Category</th>
                        <th>Location</th>
                        <th>Qty</th>
                        <th>Cost</th>
                        <th>Quality</th>
                        {sessionStorage.getItem('status') !== '0' ? <th>Edit</th> : ""}
                    </tr>
                </thead>
                <tbody>
                    {assetData.map(row => (
                        <tr id={row._id} key={row._id}>
                            {/* <td id={row._id}>{row._id}</td> */}
                            <td id={row._id}>{toggleInput !== false && toggleid === row._id ? <Select id={row._id}
                                placeholder={category}
                                value={category}
                                options={categoryData}
                                onChange={handleCategoryChange}
                                getOptionLabel={x => x.category}
                                getOptionValue={x => x.category}
                            /> : row.Category}</td> {/* value={category} onChange={handleInputChange} */}
                            <td id={row._id}>{toggleInput !== false && toggleid === row._id ? <Select id={row._id}
                                placeholder={type}
                                value={type}
                                options={typeList}
                                onChange={handleTypeChange}
                                getOptionLabel={x => x}
                                getOptionValue={x => x}
                            /> : row.Type}</td> {/* value={category} onChange={handleInputChange} */}
                            {/* <td id={row._id}>{toggleInput != false && toggleid == row._id ? <Input id="type" type="text" name="search" placeholder={row.Type} /> : row.Type}</td> value={type} onChange={handleInputChange} */}
                            <td id={row._id}>{toggleInput !== false && toggleid === row._id ? <Input id="subcategory" type="text" name="search" placeholder={row.SubCategory} /> : row.SubCategory}</td> {/* value={subcategory} onChange={handleInputChange} */}
                            <td id={row._id}>{toggleInput !== false && toggleid === row._id ? <Input id="location" type="text" name="search" placeholder={row.Location} /> : row.Location}</td> {/* value={location} onChange={handleInputChange} */}
                            <td id={row._id}>{toggleInput !== false && toggleid === row._id ? <Input id="qty" type="text" name="search" placeholder={row.QTY} /> : row.QTY}</td> {/* value={qty} onChange={handleInputChange} */}
                            <td id={row._id}>{toggleInput !== false && toggleid === row._id ? <Input id="cost" type="text" name="search" placeholder={row.Cost} /> : row.Cost}</td> {/* value={cost} onChange={handleInputChange} */}
                            <td id={row._id}>{toggleInput !== false && toggleid === row._id ? <Input id="quality" type="text" name="search" placeholder={row.Quality} /> : row.Quality}</td> {/* value={quality} onChange={handleInputChange} */}
                            {sessionStorage.getItem('status') !== '0' ? <td><Button id={row._id} key={row._id} onClick={toggle} color="primary">Edit</Button></td> : ""}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default AssetTable;