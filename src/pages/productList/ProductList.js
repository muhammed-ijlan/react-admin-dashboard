import React, { useContext, useEffect, useState } from "react";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../components/featuredInfo/chart/dummyData";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { MovieContext } from "../../context/movieContext/MovieContext"
import { getMovies } from '../../context/movieContext/apiCalls'

export default function ProductList() {
    const { movies, dispatch } = useContext(MovieContext)

    useEffect(() => {
        getMovies(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "movie",
            headerName: "Movie",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListProuct">
                        <img
                            className="productListImg"
                            src={params.row.image}
                            alt="pic"
                        ></img>
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "genre", headerName: "Genre", width: 120 },
        { field: "year", headerName: "Year", width: 120 },
        { field: "limit", headerName: "limit", width: 120 },
        { field: "isSeries", headerName: "Is Series", width: 120 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDel"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={movies}
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
