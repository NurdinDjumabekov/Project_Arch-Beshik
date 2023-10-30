import React from 'react'
import Login from '../Login/Login'
import Registr from '../Registr/Registr'
import styles from "./Account.module.scss"

const Account = () => {
  return (
    <div className={styles.accountBlock}>
        <Login />
        <Registr />
    </div>
  )
}

export default Account