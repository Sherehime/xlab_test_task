import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";


const WithSetPathNameInLocalStorage = (Component) => {
    const useSetLastPathInLocalStorage = (path) => {
        useEffect(() => {
            localStorage.setItem('lastPath', path)
        })
    }

    const SetPathNameContainer = ({location, ...props}) => {
        useSetLastPathInLocalStorage(location.pathname)
        return <Component {...props}/>
    }
    return withRouter(SetPathNameContainer)
}

export default WithSetPathNameInLocalStorage
