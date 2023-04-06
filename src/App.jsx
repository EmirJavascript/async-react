import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { AboutPage } from "./pages/about"
import { Layout } from "./components/layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App


// Для дочернего Route прописываем index, так как для дочернего не желательно наследовать родительский path