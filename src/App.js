import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

import Navbar from './components/navbar'

function App() {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <TypoGraphy
          variant="title"
          color="inherit"
        >
          Matthew Cahn
           </TypoGraphy>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
}

export default App;
