import styles from "./NavMenu.module.scss"
import logo from "../../../assets/images/logo.svg"
import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import Account from "../../Auth/Account/Account";
import InputSearch from "../../Inputs/InputSearch/InputSearch";

const NavMenu = () => {

  interface IPage {
  id: number;
  name: string;
  path: string;
  bool: boolean; 
}

const location = useLocation()

const [ pages, setPages ]=useState<IPage[]>([
    {
      id: 1,
      name: "Новостнаялента",
      path: "/",
      bool: false
    },
    {
      id: 2,
      name: "Квартиры",
      path: "/apartament",
      bool: false
    },
    {
      id: 3,
      name: "Дороги",
      path: "/roads",
      bool: false
    },
    {
      id: 4,
      name: "Тазалык",
      path: "/Тазалык",
      bool: false
    },
    {
      id: 5,
      name: "Водоканал",
      path: "/Водоканал",
      bool: false
    },
    {
      id: 6,
      name: "Жарыктандыруу",
      path: "/Жарыктандыруу",
      bool: false
    },
    {
      id: 7,
      name: "НовостнаяЛента",
      path: "/",
      bool: false
    },
    {
      id: 8,
      name: "Квартиры",
      path: "/apartament",
      bool: false
    },
  ])

  // console.log(pages, "pages");
  // console.log(location.pathname, "location.pathname");

  useEffect(()=>{
    const newPage = pages.map((page) => {
      if (page.path === location.pathname) {
        return {
          ...page,
          bool: true,
        };
      } else {
        return {
          ...page,
          bool: false,
        };
      }
    });
    setPages(newPage);
  }, [location.pathname])

  return (
    <div className={styles.navMenu}>
        <div className="container">
        <div className={styles.navMenu__inner}>
            <NavLink className={styles.logo} to={"/"}>
                <img src={logo} alt={logo} />
                {/* <div></div> */}
                <p>Арча Бешик</p>
            </NavLink>
            <div className={styles.account}>
              <InputSearch />
            </div>
            {/* <ul className={styles.pages}>
              {
                pages?.map((p)=>
                  (<li key={p.id} className={p.bool ? styles.activePage : ""}>
                    <NavLink to={p.path}>{p.name}</NavLink>
                  </li>))
              }
            </ul> */}
            <Account />
        </div>
        </div>
    </div>
  )
}

export default NavMenu