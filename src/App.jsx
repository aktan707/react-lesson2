import Header from "./components/header/Header"
import './app.css'
import MenuPage from "./pages/menu/menuPage"
// component -App (JS , JSX , CSS)
import { Routes, Route, Outlet} from 'react-router-dom'
import HomePage from "./pages/home-page/HomePage.jsx";

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
function App() {

  return (
    <div>
      <Routes>
        <Route path="/react-lesson2/" element={<Layout/>}>
          <Route path="/react-lesson2/" element={<HomePage/>}/>
          <Route path="/react-lesson2/menu" element={<MenuPage/>}/>
          {/* <Route/> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
