import React from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Main } from './pages/Main';
import { Alone } from './pages/Alone';
import { Type } from './pages/Type';
import { With } from './pages/With';
import { Search } from './pages/Search';
import { NotFound } from './pages/NotFound';
// import { Layout, LoginLayout, MainLayout } from './components/common/Layout';

function App() {
  return (
    <div className="sober-wrap">
      <Header />
      <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='with' element={<With />}/>
          <Route path='alone' element={<Alone />}/>
          <Route path='type' element={<Type />}/>
          <Route path='kimchi' element={<Search />}/>
          <Route path='stopwatch' element={<Search />}/>
          <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
