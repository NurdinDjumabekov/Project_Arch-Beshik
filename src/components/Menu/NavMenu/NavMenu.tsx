import styles from "./NavMenu.module.scss"
import logo from "../../../assets/images/logo.svg"
import { NavLink } from "react-router-dom"

const NavMenu = () => {
  return (
    <div className={styles.navMenu}>
        <div className="container">
            <NavLink className={styles.navMenu__logo} to={"/"}>
                <img src={logo} alt={logo} />
                <div></div>
                <p>Арча Бешик</p>
            </NavLink>
            <div className={styles.navMenu__account}>
                {/* /// input */}
            </div>
        </div>
    </div>
  )
}

export default NavMenu