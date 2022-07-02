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
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>List type</label>
                        <input type="text" placeholder={list.type} />
                        <label>Year</label>
                        <input type="text" placeholder={list.year} name="" id="" />
                        <label>Genre</label>
                        <input type="text" placeholder={list.genre} name="" id="" />
                        <label>Liimit</label>
                        <input type="text" placeholder={list.limit} name="" id="" />
                        <label>Trailer</label>
                        <input type="file" placeholder={list.trailer} name="" id="" />
                        <label>Video</label>
                        <input type="file" placeholder={list.video} name="" id="" />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
