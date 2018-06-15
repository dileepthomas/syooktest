import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../actions'
import { Field, reduxForm } from 'redux-form';
import {  Link  } from 'react-router-dom'
import './login.css'

class Login extends Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <div className="login-container">
                <form onSubmit={handleSubmit(this.props.onLogin)}>
                    <div className="input-div">
                        <label htmlFor="emailId">Email Id</label>
                        <Field name="emailId" component="input" type="email" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="password" />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <Link to={"/signup"}><button>Sign Up?</button></Link>
                </form>
            </div>
        )
    }
}


Login = reduxForm({
    // unique name for the login form
    form: "login"
})(Login)

const mapDispatchToProps = dispatch => {
    return {
        onLogin: values => dispatch(loginActions.onLoginHandler(values))
    }
}

export default connect(null, mapDispatchToProps)(Login)