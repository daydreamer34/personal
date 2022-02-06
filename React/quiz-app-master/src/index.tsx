import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { blue, lightBlue } from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: blue[600] },
    secondary: { main: lightBlue['A700'] },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
