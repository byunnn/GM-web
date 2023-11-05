import React from 'react';

import NavbarItem from './NavbarItem';
import { PAGES } from '../Misc/Enums';

import logo from './logo.png';
import './Navbar.css';

const Navbar = ({ setPage, pageNum, setPageNum }) => {

  const handleClick = (pageName, pageNum) => {
    setPage(pageName);
    setPageNum(pageNum);
  };

  return (
    <nav className="navbar-container">
      <img
        src={logo}
        alt="gm"
        className="logo"
        onClick={() => handleClick(PAGES.HOME, PAGES.HOME.pageIndex)}
      />
      <ul className="navbar-itemList" >
        {Object.values(PAGES).map((page) => (
          <NavbarItem
            key={page.pageIndex}
            itemName={page.Name}
            pageValue={page.Value}
            pageNum={pageNum}
            onClick={() => handleClick(page, page.pageIndex)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
