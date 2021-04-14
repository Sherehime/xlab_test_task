import {connect} from "react-redux"
import React, {useState} from "react"
import {login} from "../../Redux/authReducer";
import styles from "./Login.module.css"
import {compose} from "redux";
import LoginReduxForm from "./LoginForm";
import {withRouter} from "react-router-dom";


const Login = ({login, history}) => {
    let [isSubmitting, setSubmitting] = useState(false)
    const onSubmit = (formData) => {
        setSubmitting(true);
        let {username, password} = formData;

        login(username, password).finally(_ => {
                setSubmitting(false);
            }
        ).then((response) => {
            localStorage.setItem('token', response.token);
            history.push('/users')
            }
        )
    }

    return (
        <div className={styles.Login}>
            <h1 className={styles.LoginHeading}>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}
                            setSubmitting={setSubmitting}
                            isSubmitting={isSubmitting}
                            />
        </div>
    )
}

const loginCompose = compose(
    withRouter,
    connect(null, {login})
)(Login)

export default loginCompose
