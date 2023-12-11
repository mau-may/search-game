import React from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './components/common/Header';
import { Main } from './pages/Main';
import { Search } from './pages/Search';
// import { Layout, LoginLayout, MainLayout } from './components/common/Layout';

function App() {
  return (
    <div className="sober-wrap">
      <Header />
      <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='kimchi' element={<Search />}/>
      </Routes>
    </div>
  );
}

export default App;
