import MainContent from "../../components/MainPage/MainContent/MainContent";
import { useAppSelector } from "../../hook"

const MainPage = () => {
  const { stateContentList, stateCategory } = useAppSelector((state) => state.mainPageSlice)
  console.log(stateContentList, "stateContentList");
  console.log(stateCategory, "stateCategory");

  return (
    <div>
      <MainContent />
    </div>
  )
}

export default MainPage