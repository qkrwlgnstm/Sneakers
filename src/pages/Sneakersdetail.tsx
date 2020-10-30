import React from 'react';
import Header from '../component/Header';
import Banner from '../component/Banner';
import Lnb from '../component/Lnb';
import Productlist from '../component/Productlist';
import './Sneakersdetail.scss';
import FireBaseTestFile from '../component/FireBaseTestFile';

function Sneakersdetail() {
  return (
    <div className="wrap">
      <Header/>
      <div className="content">
        <Banner/>
        <Lnb/>
        <Productlist/>
        <FireBaseTestFile/>
      </div>
    </div>
  );
}

export default Sneakersdetail;
