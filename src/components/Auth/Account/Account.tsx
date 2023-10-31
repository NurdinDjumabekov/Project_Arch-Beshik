import React from 'react'
import Login from '../Login/Login'
import Registr from '../Registr/Registr'
import styles from "./Account.module.scss"
import { useAppSelector } from '../../../hook'
import LogOut from '../LogOut/LogOut'

const Account = () => {
  const { dataToken } = useAppSelector((state) => state.registrSlice)

  return (
    <div className={styles.accountBlock}>
      {
        dataToken?.token 
        ? 
        <>
          <p>{ dataToken?.username }</p>
          <LogOut />
        </>
        :
        <>
          <Login />
          <Registr />
        </>
      }
    </div>
  )
}

export default Account