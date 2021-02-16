import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class MovieList extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=d65dad86&s=batman')
            .then(res => res.json())
            .then(this.renderMovies)
            .catch(error => console.log(error))
    }

    renderMovies = (response) => {
        this.setState({
            movies: response.Search
        })
    }

    render() {
        console.log(this.state.movies)
        let {movies} = this.state
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Movie List</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        {movies && movies.map((movie, index) => {
                            return(
                                <div key={index} className="col-md-4">
                                    <Link to={movie.imdbID}>
                                        <img className="img-thumbnail" src={movie.Poster} alt="poster"/>
                                    </Link>
                                    <p>Title: {movie.Title}</p>
                                    <p>Year: {movie.Year}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className="card-footer">
                        <h4 className="card-title">Total found: {movies.length} movie</h4>
                    </div>
                </div>
            </>
        )
    }
}

export default MovieList
