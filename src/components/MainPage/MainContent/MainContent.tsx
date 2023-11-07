import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../hook"
import styles from "./MainContent.module.scss"

const MainContent = () => {
    const { stateContentList } = useAppSelector((state) => state.mainPageSlice)

    // console.log(stateContentList, "stateContentList");
    // const arr = [...stateContentList, ...stateContentList, ...stateContentList]

    return (
        <div className={styles.contentBlock}>
            <div className="container">
                <div className={styles.contentBlock__inner}>
                    {
                        stateContentList?.length === 0 ?
                            <p className={styles.noneData}>Данных пока что нету</p> :
                            stateContentList?.map((block) => (
                                <NavLink to={`/detailed/${block.id}`} className={styles.contentBlock__every} key={block.id}>
                                    <h3>Новости</h3>
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