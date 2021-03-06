import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../store/actions/authAction';
import LoginForm from '../components/LoginForm';

export class Login extends Component {
   
    state = {
        username: '',
        password: ''
    }
    
    submitHandler = e => {
        e.preventDefault();
        const {username, password} = this.state;
        this.props.login({username, password}, this.props.history)
        this.setState({
            username: '',
            password: ''
        })
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    render() {
        const {username, password} = this.state;
        return (
            <>
                <LoginForm username={username}
                    password={password}
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler} />
            </>
        )
    }
}

export default connect(null, {login}) (Login)
