import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import SearchMovie from '../components/SearchMovie';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <PageHeader title="Dashboard"/>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <SearchMovie />
                    </div>
                </div>                
            </div>
        )
    }
}

export default Dashboard;
