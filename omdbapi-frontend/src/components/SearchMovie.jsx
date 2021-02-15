import React, { Component } from 'react'

class SearchMovie extends Component {

    state = {
        keyword: '',
        movies : []
    }

    changeHandler = e => {
        this.setState({
            keyword: e.target.value
        })
    }

    searchMovie = () => {
        fetch(`http://www.omdbapi.com/?apikey=d65dad86&s=${this.state.keyword}`)
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
        return (
            <>
             <h2>Search Movie</h2>
             <div className="form-group">
                 <input 
                    type="text"
                    onChange={this.changeHandler}
                    vlaue={this.state.keyword}
                    className="form-control"
                    placeholder="Search Movie" 
                 />
             </div>
             <button onClick={this.searchMovie} className="btn btn-success btn-sm">Search</button>

            <ul className="list-group mt-3">
                {
                    this.state.movies && this.state.movies.map((movie, index) => {
                        return(
                            <li className="list-group-item" key={index}>{movie.Title}</li>
                        )
                    })
                }
            </ul>

            </>
        )
    }
}

export default SearchMovie
