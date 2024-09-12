
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { routes } from "./utils/routes";
import Error from "./Routes/Error";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.contact} element={<Contact/>}/>
      <Route path={routes.detail + '/:id'} element={<Detail/>}/>
      <Route path={routes.favs} element={<Favs/>}/>
      <Route path={routes.notFound} element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
    
    
  );
}

export default App;
