import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { Header } from './components/common/Header';
import { Main } from './pages/Main';
import { Search } from './pages/Search';
// import { Layout, LoginLayout, MainLayout } from './components/common/Layout';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/hello' element={<Search />}/>
      </Routes>
    </>
  );
}

export default App;
