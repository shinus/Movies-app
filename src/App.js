import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './Componenets/Home/Home';
import Header from './Componenets/Header/Header';
import MoviesDetails from './Componenets/MoviesDetails/MoviesDetail';
import PageNotFound from './Componenets//PageNotFound/PageNotFound';
import Footer from './Componenets/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className='container'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/movie/:imdbID' element={<MoviesDetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
