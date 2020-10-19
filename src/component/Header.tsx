import React from 'react';
import Input from '../component/Input';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="inner">
        <h1 className="logo">
          <Link to="">
            <img src="/homepage_logo.svg" alt="로고 이미지" />
          </Link>
        </h1>
        <Input />
        <ul className="gnb-list">
          <li className="list-item">
            <Link to="">News</Link>
          </li>
          <li className="list-item">
            <Link to="">About</Link>
          </li>
          <li className="list-item">
            <Link to="">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
