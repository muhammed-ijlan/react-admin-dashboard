import React, { useContext, useEffect } from "react";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./MovieList.css";
import { ListContext } from "../../context/listContext/ListContext"
import { deleteLists, getLists } from "../../context/listContext/apiCalls";

export default function MovieList() {

    const { lists, dispatch } = useContext(ListContext)

    useEffect(() => {
        getLists(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteLists(id, dispatch)
    };
    const columns = [
        { field: "_id", headerName: "ID", width: 200 },
        { field: "title", headerName: "title", width: 250 },
        { field: "genre", headerName: "Genre", width: 150 },
        { field: "type", headerName: "type", width: 150 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={{ pathname: "/list/" + params.row._id, list: params.row }}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDel"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </div>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={lists}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={r => r._id}
            />
        </div>
    );
}
