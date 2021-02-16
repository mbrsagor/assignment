import React, { Component } from 'react'

class SearchMovie extends Component {

    state = {
        title: '',
        movies : []
    }

    changeHandler = e => {
        this.setState({
            title: e.target.value
        })
    }

    searchMovieHandler = () => {
        fetch(`http://www.omdbapi.com/?apikey=d65dad86&s=${this.state.title}`)
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
                    vlaue={this.state.title}
                    className="form-control"
                    placeholder="Search Movie By Title" 
                 />
             </div>
             <button onClick={this.searchMovieHandler} className="btn btn-success btn-sm">Search</button>

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
