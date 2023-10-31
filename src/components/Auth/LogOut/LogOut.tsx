import styles from './LogOut.module.scss';
import { useAppDispatch } from '../../../hook';
import { toTakeToken } from '../../../store/reducers/registrSlice';

const LogOut = () => {
  const dispatch = useAppDispatch()

  const logOut = () => {
    dispatch(toTakeToken({token: "", username: ""}))
    localStorage.clear()
  }

  return (
    <button className={styles.logOut} onClick={logOut}>Выход</button>
  )
}

export default LogOut