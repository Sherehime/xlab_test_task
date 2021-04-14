import React, {useEffect, useState} from "react";
import {requestUsers} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import User from "./User";
import {sortById} from "../../utils/sortById";
import styles from "./Users.module.css"
import classNames from "classnames"
import {compose} from "redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import Logout from "../Logout/Logout";
import WithSetPathNameInLocalStorage from "../HOC/withSetPathNameInLocalStorage";

const useRequestUsers = (requestUsers, token) => {
    useEffect(() => {
        requestUsers(token)
    }, [])
}

const useResetSortListener = (users, filterValue, setIsSortByUp) => {
    useEffect(() => {
        setIsSortByUp(null)
    }, [users, filterValue])
}


const Users = ({requestUsers, users, token, ...props}) => {
    let [pageUsers, setPageUsers] = useState(users)
    let [filterValue, setFilterValue] = useState("")
    let [isSortByUp, setIsSortByUp] = useState(null)

    useRequestUsers(requestUsers, token)//Hook RequestUsers
    useResetSortListener(users, filterValue, setIsSortByUp)

    useEffect(() => {
        setPageUsers(users)
    }, [users])

    const filterUsers = (users, value) => {
        return users.filter(u => u.username.includes(value))
    }

    const onFilterValueChange = (e) => {
        setFilterValue(e.target.value)
        setPageUsers(filterUsers(users, e.target.value))
    }

    const onSortByIdClick = () => {
        setPageUsers(sortById(pageUsers, isSortByUp))
        setIsSortByUp(!isSortByUp)
    }

    let usersElements = pageUsers.map(u => {
        return <User id={u.id} key={u.id}
                     username={u.username}

        />
    })


    return (
        <>
            <Logout/>
            <div className={styles.UsersHeader}>

                <div
                    className={classNames(styles.SortById, {
                        [styles.ByUp]: isSortByUp === true,
                        [styles.ByDown]: isSortByUp === false
                    })}
                    onClick={onSortByIdClick}>
                    Sort
                </div>
                <input value={filterValue}
                       onChange={onFilterValueChange}
                       placeholder="Начните вводить имя по..."
                       className={styles.UsersFilterInput}
                />



            </div>

            <div className={styles.Users}>
                <div className={styles.Header}>
                    <div className={styles.User}>
                        <div>Id</div>
                        <div>username</div>

                    </div>
                </div>
                {usersElements}
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        token: state.auth.token
    }
}

const UsersCompose = compose(
    WithSetPathNameInLocalStorage,
    withAuthRedirect
)(Users)

export default connect(mapStateToProps, {requestUsers})(UsersCompose)
