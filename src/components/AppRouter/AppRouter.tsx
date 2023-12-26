import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Glossary } from "../../pages/Glossary/Glossary";
import { Header } from "../Header/Header";
import { Semantic } from "../../pages/Semantic/Semantic";

export const AppRouter = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/glossary" element={<Glossary />}/>
        <Route path="/semantic" element={<Semantic />}/>
        <Route path='*' element={<Glossary />} />
      </Routes>
    </BrowserRouter>
  )
}

