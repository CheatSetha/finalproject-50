import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Created At',
        selector: 'createdAt',
        sortable: true,
    },
    {
        name: 'Views',
        selector: 'views',
        sortable: true,
    },
    {
        name: 'Action',
        cell: row => (
            <div>
                <button onClick={() => handleDelete(row)}>Delete</button>
                <button onClick={() => handleUpdate(row)}>Update</button>
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];

const data = [
    {id: 1, title: 'Example Title 1', createdAt: '2023-06-15', views: 100},
    {id: 2, title: 'Example Title 2', createdAt: '2023-06-14', views: 150},
    {id: 3, title: 'Example Title 3', createdAt: '2023-06-13', views: 200},
];

const DataTableComponent = () => {
    const handleDelete = row => {
        // Delete functionality
    };

    const handleUpdate = row => {
        // Update functionality
    };

    return <DataTable columns={columns} data={data}/>;
};

export default DataTableComponent;
