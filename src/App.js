import React, { useState } from 'react';

import Home from './Components/Home/Home';
import History from './Components/History/History';
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
        {page === PAGES.HISTORY && (
          <History
            setPage={setPage}
            setPageNum={setPageNum}
            page={PAGES.HISTORY.Name}
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
          page={PAGES.GENERATION.Name}/>
        )}

        {page === PAGES.PROGRESS && (
          <Progress
          setPage={setPage}
          setPageNum={setPageNum}
          page={PAGES.PROGRESS.Name}/>
        )}


      </div>
    </>
  );
}

export default App;
