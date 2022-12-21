import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Protokoll from './pages/Protokoll/Protokoll';
import Einstellungen from './pages/other-pages/Einstellungen';
import Kurven from './pages/other-pages/Kurven';
import Patienten from './pages/other-pages/Patienten';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<h1>Powered by CURASOFT</h1>}></Route>
          <Route path='/protokoll/' element={<Protokoll />}>
            <Route path=':type' element={<Protokoll />} >
              <Route path=':page' element={<Protokoll />} />
            </Route>
          </Route>
          <Route path='/einstellungen' element={<Einstellungen />}></Route>
          <Route path='/kurven' element={<Kurven />}></Route>
          <Route path='/patienten' element={<Patienten />}></Route>
          <Route path='*' element={<h1>https://www.curasoft.de</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
