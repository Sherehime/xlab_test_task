import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

const WithAuthRedirect = (Component) => {
    const AuthContainer = (props) => {
        if (!props.token) props.history.push('/login')
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(withRouter(AuthContainer))
}

export default WithAuthRedirect
