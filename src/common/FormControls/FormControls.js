import React from "react";
import styles from "./FormControls.module.css"


export const Input = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched

    return (
        <>
            <div className={props.className ? styles[props.className] : styles.Input}>
                <input {...input} {...props} className={hasError ? styles.Error : ""}/>
            </div>

            {hasError && <div>
                <span className={styles.ErrorSpan}>{meta.error}</span></div>}
        </>
    )
}

export const passwordInput = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched

    const setType = () => {
        props.setType(
            props.type === "password" ? "text" : "password"
        )
    }

    return (
        <>
            <div className={props.className ? styles[props.className] : styles.Input}>
                <input {...input} {...props} className={hasError ? styles.Error : ""}/>
                <span onClick={setType} className={styles.ShowLabel}>
                   &#9733;
                </span>
            </div>

            {hasError && <div>
                <span className={styles.ErrorSpan}>{meta.error}</span>
            </div>}

        </>

    )
}
