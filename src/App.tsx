import { Routes, Route } from "react-router-dom";
// import './App.css'
import { MainLayout } from "./page/MainLayout";
import { Home } from "./page/Home/Home";

function App() {
  

  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      </Route>
     
    </Routes>
  </>
  )
}

export default App
