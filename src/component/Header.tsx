import React from 'react';
import Input from '../component/Input';

import './Header.scss';

function App() {
  return (
    <div className="header">
      <div className="inner">
        <h1 className="logo">
          <a href="#">
            <img src="/homepage_logo.svg" alt="로고 이미지" />
          </a>
        </h1>
        <Input />
      </div>
    </div>
  );
}

export default App;
