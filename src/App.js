import Home from './components/pages/Home';
import SearchAppBar from './components/AppBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tour from './components/pages/Tour';

function App() {

  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;