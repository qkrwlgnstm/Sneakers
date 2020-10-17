import React from 'react';

import './Productlist.scss';

function App() {
  return (
    <div className="product-area">
      <ul className="product-list">
        <li className="list-item">
          <div className="list-box">
            <div className="product-img">

            </div>
            <div className="product-info">
              <strong className="product-name">Nike Air Rubber Dunk Off-White UNC</strong>
              <span className="product-price-info">lowest ask</span>
              <strong className="product-price"></strong>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
