import React, { useState } from 'react'
import eyeOff from "../../../assets/images/modal/eye-off.svg"
import eyeOn from "../../../assets/images/modal/eye-on.svg"
import styles from './InputPassword.module.scss';

interface InputPasswordProps {
  placeholder: string;
  name: string;
  changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({ placeholder, name, changeInput }) => {
  const [lookPassword, setLookPassword] = useState<boolean>(true)
  return (
    <div className={styles.inputPassword}>
      <input type={lookPassword ? "password" : "text"} required placeholder={placeholder} name={name} onChange={changeInput} />
      <div className={styles.eyeBlock} onClick={() => setLookPassword(!lookPassword)}>
        {
          lookPassword ? <img src={eyeOff} alt="вижу" /> : <img src={eyeOn} alt="не вижу" />
        }
      </div>
    </div>

  )
}

export default InputPassword