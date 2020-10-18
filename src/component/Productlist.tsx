import React from 'react';

import './Productlist.scss';

function App() {
  return (
    <div className="product-area">
      <ul className="product-list">
        <li className="list-item">
          <div className="list-box">
            <div className="product-img">
              <img src="/Nike-Air-Rubber-Dunk-Off-White-UNC.jpg" alt="Nike-Air-Rubber-Dunk-Off-White-UNC 이미지" />
            </div>
            <div className="product-info">
              <strong className="product-name">Nike Air Rubber Dunk Off-White UNC</strong>
              <span className="product-price-info">lowest ask</span>
              <strong className="product-price">$307</strong>
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-box">
            <div className="product-img">
              <img src="/Nike-Dunk-High-Michigan-2020-Product.jpg" alt="Nike-Dunk-High-Michigan-2020-Product 이미지" />
            </div>
            <div className="product-info">
              <strong className="product-name">Nike Dunk High Michigan (2020)</strong>
              <span className="product-price-info">lowest ask</span>
              <strong className="product-price">$200</strong>
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-box">
            <div className="product-img">
              <img src="/Nike-Blazer-Mid-77-Vintage-White-Black-Product.jpg" alt="Nike-Blazer-Mid-77-Vintage-White-Black-Product 이미지" />
            </div>
            <div className="product-info">
              <strong className="product-name">Nike Blazer Mid 77 Vintage White Black</strong>
              <span className="product-price-info">lowest ask</span>
              <strong className="product-price">$310</strong>
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-box">
            <div className="product-img">
              <img src="/Nike-Dunk-High-Pro-Green.jpg" alt="Nike-Dunk-High-Pro-Green 이미지" />
            </div>
            <div className="product-info">
              <strong className="product-name">Nike Dunk High Spartan Green</strong>
              <span className="product-price-info">lowest ask</span>
              <strong className="product-price">$200</strong>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
