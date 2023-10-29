import styles from "./NavMenu.module.scss"
import logo from "../../../assets/images/logo.svg"
import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";

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
      name: "Новостная лента",
      path: "/",
      bool: false
    },
    {
      id: 2,
      name: "квартиры",
      path: "/apartament",
      bool: false
    }
  ])

  console.log(pages, "pages");
  console.log(location.pathname, "location.pathname");

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
                <div></div>
                <p>Арча Бешик</p>
            </NavLink>
            <div className={styles.account}>
                {/* /// input */}
            </div>
            <ul className={styles.pages}>
              {
                pages?.map((p)=>
                  (<li key={p.id} className={p.bool ? styles.activePage : ""}>
                    <NavLink to={p.path}>{p.name}</NavLink>
                  </li>))
              }
            </ul>
        </div>
        </div>
    </div>
  )
}

export default NavMenu