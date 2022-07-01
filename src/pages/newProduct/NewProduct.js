import "./NewProduct.css";

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="img" />
                </div>
                <div className="addProductItem">
                    <label>Title Image</label>
                    <input type="file" id="imgTitle" />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail Image</label>
                    <input type="file" id="imgSmall" />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="John wick" />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder="description" />
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder="year" />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="description" />
                </div>
                <div className="addProductItem">
                    <label>Limit</label>
                    <input type="text" placeholder="description" />
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