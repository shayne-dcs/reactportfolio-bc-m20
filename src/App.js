import Navbar from './components/NavBar/Navbar'
import CssBaseline from '@mui/material/CssBaseline'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
