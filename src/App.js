import React, { useState } from 'react';

import Home from './Components/Home/Home';
import Overview from './Components/Overview/Overview';
import Generation from './Components/Generation/Generation';
import Progress from './Components/Dashboard/Progress';
import Navbar from './Shared/Navbar/Navbar';
import { PAGES } from './Shared/Misc/Enums';

import './App.css';

function App() {
  const [pageNum, setPageNum] = useState(PAGES.GENERATION.pageIndex);
  const [page, setPage] = useState(PAGES.GENERATION);

  return (
    <>
      <Navbar setPage={setPage} pageNum={pageNum} setPageNum={setPageNum} />

      <div id="page-content">
        {page === PAGES.OVERVIEW && (
          <Overview
            setPage={setPage}
            setPageNum={setPageNum}
            page={PAGES.OVERVIEW.Name}
          />
        )}

        {page === PAGES.HOME && (
          <Home
          setPage={setPage}
          setPageNum={setPageNum}
          page={PAGES.HOME.Name}
        />
        )}

        {page === PAGES.GENERATION && (
          <Generation
          setPage={setPage}
          setPageNum={setPageNum}
          page={PAGES.HOME.Name}/>
        )}

        {page === PAGES.PROGRESS && (
          <Progress></Progress>
        )}


      </div>
    </>
  );
}

export default App;
