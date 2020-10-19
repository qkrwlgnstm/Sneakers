import React from 'react';
import Header from '../component/Header';
import './Productdetail.scss';

function Productdetail() {
  return (
    <div className="wrap">
      <Header/>
      <div className="content">
        <div className="product-info">
          <strong className="product-title">Nike Air Rubber Dunk Off-White UNC</strong>
          <div className="product-info-area">
            <div className="size-area">
              <dl className="size-box">
                <dt>Size</dt>
                <dd>ALL</dd>
              </dl>
            </div>
            <div className="price-info">
              <dl className="">
                <dt>Last Sale</dt>
                <dd>
                  <strong className="price-text">$330</strong>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
