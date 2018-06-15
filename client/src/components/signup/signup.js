import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as signupActions from '../../actions'
import { Field, reduxForm } from 'redux-form';
import {  Link  } from 'react-router-dom'
import './signup.css'

class SignUp extends Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <div className="signup-container">
                <form onSubmit={handleSubmit(this.props.onSignup)}>
                    <div className="input-div">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="emailId">Email Id</label>
                        <Field name="emailId" component="input" type="text" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="password" />
                    </div>
                    <button type="submit" className="signup-btn">Sign Up</button>
                    <Link to={"/"}><button>Already have Account</button></Link>
                </form>
            </div>
        )
    }
}


SignUp = reduxForm({
    // unique name for the SignUp form
    form: "signup"
})(SignUp)

const mapDispatchToProps = dispatch => {
    return {
        onSignup: values => dispatch(signupActions.onSignupHandler(values))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)