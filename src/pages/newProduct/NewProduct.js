import "./NewProduct.css";
import { useState } from 'react'

export default function NewProduct() {
    const [movie, setMovie] = useState(null)
    const [img, setImg] = useState(null);
    const [imgSmall, setImgSmall] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);

    function handleChange(e) {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value })
    }

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="img" name='img' onChange={e => setImg(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Title Image</label>
                    <input type="file" id="imgTitle" name='imgTitle' onChange={e => setImgTitle(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail Image</label>
                    <input type="file" id="imgSmall" name='imgSmall' onChange={e => setImgSmall(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="John wick" name='title' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder="description" name='description' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder="year" name='year' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Action" name='genre' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Limit</label>
                    <input type="text" placeholder="18+" name='limit' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Duration</label>
                    <input type="text" placeholder="description" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Is Series?</label>
                    <select name="active" id="isSeries" onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Trailer</label>
                    <input type="file" onChange={e => setTrailer(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input type="file" onChange={e => setVideo(e.target.files[0])} />
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}