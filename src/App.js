import './App.css';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({

})

function App() {
  return (
    <ThemeProvider theme={(theme)}>
      <>
        <Menu />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;