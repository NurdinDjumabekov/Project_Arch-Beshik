import styles from './ModalWin.module.scss';
import krest from "../../assets/images/modal/krest.svg"

interface ModalWinProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  children: React.ReactNode;
}

const ModalWin: React.FC<ModalWinProps> = (props) => {
  const closeModal = () => {
    props.setOpenModal(false)
  }
  return (
    <>
        {
        props.openModal && 
            <div className={styles.modal}>
                <div className={styles.modal__shadow} onClick={closeModal}>
                </div>
                <div className={styles.modal__inner}>
                    {props.children}
                    <button className={styles.krest} onClick={closeModal}>
                        <img src={krest} alt="x" />
                    </button>
                </div>
            </div>
        }
    </>
  );
}

export default ModalWin;
