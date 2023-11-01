import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../hook"
import styles from "./MainContent.module.scss"

const MainContent = () => {
  const { stateContentList } = useAppSelector((state) => state.mainPageSlice)

  console.log(stateContentList);
  const arr = [...stateContentList, ...stateContentList, ...stateContentList]
  
  return (
    <div className={styles.contentBlock}>
        <div className="container">
            <div className={styles.contentBlock__inner}>
                {
                    arr?.map((block) => (
                        <NavLink to={"/"} className={styles.contentBlock__every} key={block.id}>
                            <img src={block?.image} alt="новости" />
                            <div className={styles.contentText}>
                                <h2>{block?.title}</h2>
                                <p>{block?.content}</p>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MainContent