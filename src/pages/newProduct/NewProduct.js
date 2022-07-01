import "./NewProduct.css";
import { useState } from 'react'

export default function NewProduct() {
    const [movie, setMovie] = useState
    const [img, setImg] = useState(null);
    const [imgSmall, setImgSmall] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);


    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="img" name='img' />
                </div>
                <div className="addProductItem">
                    <label>Title Image</label>
                    <input type="file" id="imgTitle" name='imgTitle' />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail Image</label>
                    <input type="file" id="imgSmall" name='imgSmall' />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="John wick" name='title' />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder="description" name='description' />
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder="year" name='year' />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Action" name='genre' />
                </div>
                <div className="addProductItem">
                    <label>Limit</label>
                    <input type="text" placeholder="18+" name='limit' />
                </div>
                <div className="addProductItem">
                    <label>Duration</label>
                    <input type="text" placeholder="description" />
                </div>
                <div className="addProductItem">
                    <label>Is Series?</label>
                    <select name="active" id="isSeries">
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Trailer</label>
                    <input type="file" />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input type="file" />
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}