import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="one">
        <div className="footer-left">
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
            alt="Logo"
            className="logo"
          />
          <div className="home">
            A home
            <br />
            tailored to <span className="you">you.</span>
          </div>
        </div>
        <div className="footer-center">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Licenses</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookies policy</a>
              </li>
              <li>
                <a href="#">India</a>
              </li>
          </ul>
        </div>
      </div>
      <div className="footer-icons">
        <a href="mailto:example@email.com">
          <img
            src="https://p7.hiclipart.com/preview/663/97/225/email-computer-icons-message-bounce-address-email-icon.jpg"
            alt="Email"
          />
        </a>
        <a href="#">
          <img
            src="https://static.vecteezy.com/system/resources/previews/045/934/243/original/instagram-logo-icon-transparent-background-free-png.png"
            alt="Instagram"
          />
        </a>
        <a href="#">
          <img
            src="https://i.pinimg.com/originals/99/65/5e/99655e9fe24eb0a7ea38de683cedb735.jpg"
            alt="X"
          />
        </a>
        <a href="#">
          <img
            src="https://png.pngtree.com/element_our/png/20180827/linkedin-social-media-icon-png_71812.jpg"
            alt="LinkedIn"
          />
        </a>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Seculinx Inc. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
