import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from '../../components';
import Main from '../Main';
import Thanks from '../Thanks';

function Home() {
  
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/obrigado' element={<Thanks />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Home;
