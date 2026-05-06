import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';



function App() {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>0XStream</h1>
        <p>Decode the stream. Watch without limits.</p>
    </ThemeProvider>
  )
}

export default App
