import React from 'react';
import Header from '../component/Header';
import Banner from '../component/Banner';
import Lnb from '../component/Lnb';
import Productlist from '../component/Productlist';
import './Sneakersdetail.scss';

function App() {
  return (
    <div className="wrap">
      <Header/>
      <Banner/>
      <div className="content">
        <Lnb/>
        <Productlist/>
      </div>
    </div>
  );
}

export default App;
