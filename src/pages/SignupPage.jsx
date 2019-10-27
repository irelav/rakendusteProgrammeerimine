import React from "react";
import PropTypes from "prop-types";
import "./form.css";

class SignupPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit", this.state);
        fetch("/api/v1/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            this.props.history.push("/login");
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
            <div className="form">
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="email address" name={"email"} onChange={this.handleChange}/>
                    <input type="password" placeholder="password" name={"password"} onChange={this.handleChange}/>
                    <input type="password" placeholder="password" name={"confirmPassword"} onChange={this.handleChange}/>
                    <button>create</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
            </div>
        );
    }
}

export default SignupPage;