import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cartIcon} from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import {AuthContext} from "../index.jsx";

const Header = () => {
    return (
        <AuthContext.Consumer>
            {
                (contextValue) => (
                    <div className="header">
                        <Link to={"/"}>
                            <img className="header__logo" src="/images/tlu_logo.png" />            
                        </Link>
                        <div className="header__buttons">
                            
                            {contextValue.user.email && <WelcomeIcon user={contextValue.user}/>}
                            {!contextValue.user.email && <LoginRegisterIcon />}
            
                            <div className={"header__button"}>
                                <img src={cartIcon} style={{height: 35}} />
                                <div className={"header__button-text"}>Cart</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </AuthContext.Consumer>
    );
};

/*
Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.object,
};*/

const LoginRegisterIcon = () => (
    <Link className={"header__button"} to={"/login"}>
        <img src={userIcon} />
        <div className={"header__button-text"}>Login/<br />Registreeri</div>
    </Link>
);

const WelcomeIcon = ({user}) => (
    <Link className={"header__button"} to={`/users/${user._id}`}>
        <img src={userIcon} />
        <div className={"header__button-text"}>Welcome, {user.email}</div>
    </Link>
);

WelcomeIcon.propTypes = {
    user: PropTypes.object.isRequired
};

export default Header;
