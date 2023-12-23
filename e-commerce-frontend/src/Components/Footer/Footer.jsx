// import React from 'react'
// import './Footer.css'

// import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import pintrest_icon from '../Assets/pintester_icon.png'
// import whatsapp_icon from '../Assets/whatsapp_icon.png'

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className="footer-logo">
//         <img src={footer_logo} alt="" />
//         <p>NexKart</p>
//       </div>
//       <ul className="footer-links">
//         <li>Company</li>
//         <li>Products</li>
//         <li>Offices</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//       <div className="footer-social-icons">
//         <div className="footer-icons-container">
//             <img src={instagram_icon} alt="https://www.instagram.com" />
//         </div>
//         <div className="footer-icons-container">
//             <img src={pintrest_icon} alt="https://www.pintrest.com" />
//         </div>
//         <div className="footer-icons-container">
//             <img src={whatsapp_icon} alt="https://www.whatsapp.com" />
//         </div>
//       </div>
//       <div className="footer-copyright">
//         <hr />
//         <p>Copyright @ 2023 - All Right Reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import './Footer.css';

import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>NexKart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          {/* Add a link to your Instagram page */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          {/* Add a link to your Pinterest page */}
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pintrest_icon} alt="Pinterest" />
          </a>
        </div>
        <div className="footer-icons-container">
          {/* Add a link to your WhatsApp page or a WhatsApp contact link */}
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
