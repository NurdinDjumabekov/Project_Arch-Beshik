import React, { ChangeEvent, useState } from 'react'
import ModalWin from '../../ModalWin/ModalWin'
import styles from './Login.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { changeDataLogin } from '../../../store/reducers/loginSlice';
import InputPassword from '../../Inputs/InputPassword/InputPassword';

const Login = () => {
    const [ openModal, setOpenModal ] = useState<boolean>(false)
    const { dataLogin } = useAppSelector((state) => state.loginSlice)
    // const { data } = useAppSelector((state) => state.mainPageSlice)
    const dispatch = useAppDispatch()

    const sendDataLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(dataLogin,"dataLogin");
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeDataLogin({...dataLogin, [e.target.name]:e.target.value}))
    }

    return (
        <div className={styles.login}>
            <button onClick={() => setOpenModal(true)}>Вход</button>
            <ModalWin openModal={openModal} setOpenModal={setOpenModal}>
                <h4>Вход в аккаунт</h4>
                <form onSubmit={sendDataLogin} className={styles.formSend}>
                    <input type="text" placeholder='Введите логин' name='login' onChange={changeInput} required/>    
                    <InputPassword placeholder="Введите пароль" name="login" changeInput={changeInput}/>
                    <button type='submit'>Отправить</button>
                </form>
            </ModalWin>
        </div>
  )
}

export default Login