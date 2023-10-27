import { Route, Routes } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage/MainPage'
import Layout from './components/hoc/Layout/Layout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
