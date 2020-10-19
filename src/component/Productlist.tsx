import React from 'react';
import { Link } from 'react-router-dom';

import './Productlist.scss';

function Productlist() {
  return (
    <div className="product-area">
      <ul className="product-list">
        <li className="list-item">
          <Link to="/Productdetail">
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
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Productdetail">
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
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Productdetail">
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
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Productdetail">
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
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Productdetail">
            <div className="list-box">
              <div className="product-img">
                <img src="/Nike-Air-Max-270-React-Travis-Scott-Product.jpg" alt="Nike-Air-Max-270-React-Travis-Scott-Product 이미지" />
              </div>
              <div className="product-info">
                <strong className="product-name">Nike Air Max 270 React ENG Travis Scott Cactus Trails</strong>
                <span className="product-price-info">lowest ask</span>
                <strong className="product-price">$307</strong>
              </div>
            </div>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Productdetail">
            <div className="list-box">
              <div className="product-img">
                <img src="/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product.jpg" alt="Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product 이미지" />
              </div>
              <div className="product-info">
                <strong className="product-name">Nike Air Force 1 Low Supreme Black</strong>
                <span className="product-price-info">lowest ask</span>
                <strong className="product-price">$200</strong>
              </div>
            </div>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Productdetail">
            <div className="list-box">
              <div className="product-img">
                <img src="/Nike-LD-Waffle-Sacai-White-Nylon-Product.jpg" alt="Nike-LD-Waffle-Sacai-White-Nylon-Product 이미지" />
              </div>
              <div className="product-info">
                <strong className="product-name">Nike LD Waffle Sacai White Nylon</strong>
                <span className="product-price-info">lowest ask</span>
                <strong className="product-price">$310</strong>
              </div>
            </div>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Productdetail">
            <div className="list-box">
              <div className="product-img">
                <img src="/Nike-LD-Waffle-Sacai-Black-Nylon-Product.jpg" alt="Nike-LD-Waffle-Sacai-Black-Nylon-Product 이미지" />
              </div>
              <div className="product-info">
                <strong className="product-name">Nike LD Waffle Sacai Black Nylon</strong>
                <span className="product-price-info">lowest ask</span>
                <strong className="product-price">$200</strong>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Productlist;
