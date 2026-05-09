import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

import MainLayout from './layouts/MainLayout';

function Home() { return( <h2>Home</h2> ) }


function App() {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        <BrowserRouter>
          <Routes>
            <Route  element={< MainLayout />}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
