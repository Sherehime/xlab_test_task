import React from "react";
import styles from './Users.module.css'
import {connect} from "react-redux";

const User = ({username, id}) => {
    return <div className={styles.User}>
        <div>{id}</div>
        <div>{username}</div>
    </div>
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, {})(User)
