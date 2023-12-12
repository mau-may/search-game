import React from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Main } from './pages/Main';
import { Alone } from './pages/Alone';
import { With } from './pages/With';
import { Search, KimchiMain } from './pages/Kimchi';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="sober-wrap">
      <Header />
      <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='with' element={<With />}/>
          <Route path='alone' element={<Alone />}/>
          <Route path='kimchi' element={<KimchiMain />}/>
          <Route path='kimchi/start' element={<Search />}/>
          <Route path='stopwatch' element={<Search />}/>
          <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
