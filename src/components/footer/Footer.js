import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <div className="rosefooter">Grace Shopper</div>

        <p className="footer-links">
          <a href="#!" className="link-1">
            Home
          </a>

          <a href="#!">Blog</a>

          <a href="#!">Pricing</a>

          <a href="#!">About</a>

          <a href="#!">Faq</a>

          <a href="#!">Contact</a>
        </p>

        <p className="footer-company-name">Grace Shopper © 2020</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>1 Infinitely Long Bootcamp</span> Jacksonville, FL
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>867-5309</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">
              DontBotherUs@Graceshopper.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          We selling the top notch products, as you can see above, all 11 of
          them! Even the Fire 7 Tablet, which is literal garbage, and no one
          should order that, we will actually cancel your order and fine you a
          convenience fee if you do.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
