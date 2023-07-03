import './App.css'
import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";
import WeatherWidget from "./components/weather-widget.tsx";
import InformationForm from "./components/information-form.tsx";
import {theme} from "./utils/theme.tsx";
import {ThemeProvider} from "@mui/material";

function App() {

  return (
    <>
        <ThemeProvider theme={theme}>
            <Header/>
            <WeatherWidget/>
            <InformationForm/>
            <Footer/>
        </ThemeProvider>
    </>
  )
}

export default App
