
//components
import Header from './components/header/header';
import Home from './components/Home/home';

import { Box } from '@mui/material';
function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop:54}}>
        <Home />
      </Box>
      
    </div>
  );
}

export default App;
