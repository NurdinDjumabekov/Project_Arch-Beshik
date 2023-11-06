import styles from './ModalWin.module.scss';
import krest from "../../assets/images/modal/krest.svg"
import { useEffect } from 'react';

interface ModalWinProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  children: React.ReactNode;
  color: boolean
}

const ModalWin: React.FC<ModalWinProps> = (props) => {
  const closeModal = () => {
    props.setOpenModal(false)
  }
  useEffect(() => {
    if (props.openModal) {
      document.body.style.overflow = 'hidden';
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [props.openModal])

  return (
    <>
      {
        props.openModal &&
        <div className={styles.modal}>
          <div className={styles.modal__shadow} onClick={closeModal}>
          </div>
          <div className={styles.modal__inner} style={{ background: props?.color ? "red" : "white" }}>
            {props.children}
            <button className={styles.krest} onClick={closeModal}>
              <img src={krest} alt="x" />
            </button>
          </div>
        </div >
      }
    </>
  );
}

export default ModalWin;
