import React from 'react';

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: '',
        });
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='email'
                            type="email"
                            value={this.state.email}
                            required
                            handleChange={this.handleChange}
                            label='email'
                        />
                        <FormInput
                            name='password'
                            type="password"
                            value={this.state.password}
                            required
                            handleChange={this.handleChange}
                            label='password'
                        />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}