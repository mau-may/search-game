import React from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './components/common/Header';
import { Main } from './pages/Main';

import { Alone } from './pages/Alone';
import { With } from './pages/With';
import { Search, KimchiResult } from './pages/Kimchi';
import { StopwatchMain } from './pages/Stopwatch';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="sober-wrap">
      <Header />
      <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='with' element={<With />}/>
          <Route path='alone' element={<Alone />}/>
          <Route path='stopwatch' element={<StopwatchMain />}/>
          <Route path='stopwatch/start' element={<StopwatchMain />}/>
          <Route path="/*" element={<NotFound />} />
          <Route path='kimchi' element={<Search />}/>
          <Route path='kimchi/result' element={<KimchiResult />}/>
      </Routes>
    </div>
  );
}

export default App;
