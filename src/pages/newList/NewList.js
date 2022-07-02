import "./NewList.css";
import { useContext, useEffect, useState } from 'react'
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from '../../context/movieContext/apiCalls'

export default function NewList() {
    const [list, setlist] = useState(null)



    const { dispatch } = useContext(ListContext)
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext)

    useEffect(() => {
        getMovies(dispatchMovie)
    }, [dispatchMovie])

    function handleChange(e) {
        const value = e.target.value;
        setlist({ ...list, [e.target.name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function handleSelect(e) {
        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        setlist({ ...list, [e.target.name]: value })
    }

    console.log(list);

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="John wick" name='title' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="genre" name='genre' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Type</label>
                    <select name="type" onChange={handleChange}>
                        <option>type</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Content</label>
                    <select multiple name="content" onChange={handleSelect}>
                        {movies.map(movie => (

                            <option key={movie._id} value={movie._id}>{movie.title}</option>
                        ))}

                    </select>
                </div>

                <button className="addProductButton" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    );
}