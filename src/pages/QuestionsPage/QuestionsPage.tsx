import React from "react";
import styles from "./QuestionsPage.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import arrow from "../../assets/images/question/arrow_top.svg";
import { useAppDispatch, useAppSelector } from "../../hook";
import { dataQuestion } from "../../store/reducers/questionSlice";
import { NavLink } from "react-router-dom";
import QuestionsSend from "../../components/QuestionsPage/QuestionsSend";

const ExpandIcon = () => {
  return <img src={arrow} alt="Expand Icon" />;
};

const QuestionsPage = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const { stateQuestion } = useAppSelector((state) => state.questionSlice);
  // console.log(stateQuestion);

  React.useEffect(() => {
    dispatch(dataQuestion({ url: `question_list`, lang: "ru", type: "GET" }));
  }, []);
  // const [look, setLook] = React.useState<boolean>(false);
  // const arr = [
  //   {
  //     id: 1,
  //     question: "oldfjsaasjoadjk;djasl; ;dlaskdl;askjl;dkal;dl;a;l d;kl",
  //     answer: "Всем привет меня зовут Нурдин",
  //     look: false,
  //   },
  //   {
  //     id: 2,
  //     question: "oldfjsaasjoadjk;djasl; ;dlaskdl;askjl;dkal;dl;a;l d;kl",
  //     answer: "Всем привет меня зовут Нурдин",
  //     look: false,
  //   },
  // ];
  // const handleAccordionToggle = (look: boolean, id: number) => {
  //   arr.forEach((i) => {
  //     if (id === i.id) {
  //       console.log(i.id);
  //     }
  //   });
  // };

  return (
    <div className={styles.questionBlock}>
      <div className="container">
        <div className={styles.questionBlock__inner}>
          <div className={styles.questionBlock__btns}>
            <button>
              <NavLink to={"/"}>назад</NavLink>
            </button>
            <button onClick={() => setOpenModal(true)}>
              Хотите задать вопрос?
            </button>
          </div>
          {stateQuestion?.map((i) => (
            <Accordion
              key={i.id}
              // expanded={i.look}
              // onChange={() => handleAccordionToggle(!i.look, i.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandIcon />}
                aria-controls={`panel${i.id}a-content`}
                id={`panel${i.id}a-header`}
              >
                <Typography>{i.text}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{i.text}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <QuestionsSend openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>
  );
};
export default QuestionsPage;
