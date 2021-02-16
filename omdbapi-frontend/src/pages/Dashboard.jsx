import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import SearchMovie from '../components/SearchMovie';
import MovieList from '../components/MovieList';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <PageHeader title="Dashboard"/>
                </div>
                <hr/>
                <div className="row">
                <div className="col-md-9">
                        <MovieList />
                </div>
                <div className="col-md-3">
                    <SearchMovie />
                </div>
                </div>                
            </div>
        )
    }
}

export default Dashboard;
