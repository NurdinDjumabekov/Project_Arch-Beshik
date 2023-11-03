import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook';
import { toTakeDetailed } from '../../store/reducers/detailedSlice';
import styles from './DetailedPage.module.scss';
import SliderPhoto from '../../components/Detailed/SliderPhoto/SliderPhoto';

const DetailedPage = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(toTakeDetailed({ url: `content_detail/${id}`, lang: "ru", type: "GET" }));
    }, []);
    const {stateMainDetailed} = useAppSelector((state) => state.detailedSlice)
    console.log(stateMainDetailed);

  return (
    <div className={styles.detailed}>
        <div className="container">
            <div className={styles.detailed__inner}>
                <SliderPhoto  photos={stateMainDetailed.photos}/>
                <div className={styles.detailed__mainText}>
                    <h4>{stateMainDetailed?.title}</h4>
                    <p>{stateMainDetailed?.content}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailedPage