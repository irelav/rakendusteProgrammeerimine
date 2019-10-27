import React from "react";
//import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./form.css";

class LoginPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.object.isRequired,
        onLogin: PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit", this.state);
        fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then( res => res.json())
        .then(({token, user}) => {
            console.log("response", token, user);
            this.props.onLogin({token, user});
            this.props.history.push(`/users/${user._id}`);
        }).catch(err => {
            console.log("Error", err);
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render(){
        return (
            <>
                <div className="form">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input 
                        type="text" 
                        placeholder="username" 
                        name="username"
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        />
                        <input 
                        type="password" 
                        placeholder="password" 
                        name="password"
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        />
                        <button>login</button>
                        <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </>
        );
    }
}

export default LoginPage;