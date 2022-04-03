import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Analytics from './components/Analytics/Analytics';
import QNA from './components/QNA/QNA';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/analytics' element={<Analytics></Analytics>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/QNA' element={<QNA></QNA>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
