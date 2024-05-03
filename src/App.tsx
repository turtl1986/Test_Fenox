import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./page";
import { Home } from "./page";
import { Empty } from "./page";

function App() {
  

  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/empty" element={<Empty/>}/>
      </Route>
    </Routes>
  </>
  )
}

export default App
