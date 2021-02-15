import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PageHeader extends Component {
    render() {
        return (
            <>
                <div className="col-md-6">
                    <h2 className="card-title">{this.props.title}</h2>
                </div>
                <div className="col-md-6 text-right">
                    <p><Link to="/">Dashboard</Link></p>
                </div>
            </>
        )
    }
}

export default PageHeader
