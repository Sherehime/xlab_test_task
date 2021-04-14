import React from 'react';
import styles from "./Logout.module.css"
import {connect} from "react-redux";
import {nullUsersDataAction} from "../../Redux/usersReducer";
import {nullAuthDataAction} from "../../Redux/authReducer";
import {withRouter} from "react-router-dom";

function Logout(props) {

    const logout = () => {
        props.history.push("/login")
        props.logout()
    }

    return (
        <div className={styles.Logout}>
            <button className={styles.LogoutButton}
                    onClick={logout}>Logout</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(nullUsersDataAction())
            dispatch(nullAuthDataAction())
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Logout));
