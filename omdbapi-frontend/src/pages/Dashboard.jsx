import React, { Component } from 'react';

import PageHeader from '../components/PageHeader';

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
                        
                    </div>
                </div>                
            </div>
        )
    }
}

export default Dashboard;
