import React from "react";
//import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./form.css";
import {Link} from "react-router-dom";

class LoginPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.object.isRequired,
        onLogin: PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit", this.state);
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(res => {
            console.log("response", res);
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
                        type="email" 
                        placeholder="email" 
                        name="email"
                        value={this.state.email} 
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
                        <p className="message">Not registered? <Link to={"/signup"}>Register here</Link></p>
                    </form>
                </div>
            </>
        );
    }
}

export default LoginPage;