import React from 'react';

import { PAGES } from '../Misc/Enums';


const NavbarItem = ({ pageNum, pageValue, itemName, onClick }) => {
  const isActive = pageNum === PAGES[pageValue.toUpperCase()].pageIndex;
  const getPageTitle = () => {
    return <p className={isActive ? 'nav-name-active' : 'nav-name'}> {itemName}</p>;
  };


  return (
    <li className="navbar-item">
      <button className="nav-link" onClick={onClick}>
        {getPageTitle(pageNum)}
        </button>
    </li>
  );
};

export default NavbarItem;
