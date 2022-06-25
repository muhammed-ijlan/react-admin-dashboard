import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/featuredInfo/chart/Chart'
import './Product.css'
import { productData } from '../../components/featuredInfo/chart/dummyData'
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to='/newProduct'>
                    <button className='productAddBtn'>Create</button>
                </Link>
            </div>
            <div className='productTop'>
                <div className='productTopLeft'>

                    <Chart data={productData} dataKey='Sales' title='Sales Perfomanse' />

                </div>
                <div className='productTopRight'>
                    <div className='productInfoTop'>
                        <img src='https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg' alt='product' className='productInfoImage'>
                        </img>
                        <span className='productName'>Apple AirPods</span>
                    </div>
                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Id:</span>
                            <span className='productInfoValue'>123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Sales:</span>
                            <span className='productInfoValue'>$123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Active:</span>
                            <span className='productInfoValue'>Yes</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>In Stock:</span>
                            <span className='productInfoValue'>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productBottom'>
                <form className='productForm'>
                    <div className='productFormLeft'>
                        <label>Product Name</label>
                        <input type='text' placeholder='airpods'></input>
                        <label>In Stoke</label>
                        <select name='inStock' id='inStock'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className='productFormRight'>
                        <div className='productUpload'>
                            <img className='productUploadImg' src='https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg' alt='pic'></img>
                        </div>
                        <label htmlFor='file'>
                            <Publish />
                        </label>
                        <input type='file' id='file' style={{ display: "none" }}></input>
                    </div>
                    <button className='productButton'>Update</button>
                </form>
            </div>
        </div>
    )
}
