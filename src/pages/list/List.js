import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './List.css'
import { Publish } from '@material-ui/icons'

export default function List() {
    const location = useLocation()
    const list = location.list;

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>
                <Link to="/newList">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                {/* <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div> */}
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <span className="productName">{list.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{list._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre :</span>
                            <span className="productInfoValue">{list.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">type :</span>
                            <span className="productInfoValue">{list.type}</span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
