
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { routes } from "./utils/routes";
import Error from "./Routes/Error";
import Layout from "./Layouts/Layout";
import { useDentistStates } from "./Components/utils/global.context";
import { darkTheme, lightTheme } from "./utils/themes";
import { ThemeProvider } from "@mui/material";

function App() {
  // Globalmente se aplica el tema dependiendo del estado en el contexto
  // Asi no tenemos que validarlo en cada componente
  const { state } = useDentistStates();
  const appliedTheme = state.theme === 'light' ? lightTheme : darkTheme;
  
  return (
    <>
    <ThemeProvider theme={appliedTheme}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.detail + '/:id'} element={<Detail/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
        <Route path={routes.notFound} element={<Error/>}/>
      </Route>
    </Routes>
    </ThemeProvider>
    </> 
  );
}

export default App;
