import { FaTwitter, FaFacebookF, FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  return (
      
    <footer className="footer">
      <ul className="footer-list">
        <li><FaTwitter /></li>
        <li><FaFacebookF/></li>
        <li><FaInstagramSquare/></li>
      </ul>
      <p className="footer-p">&copy;Team Hypertext </p>
    </footer>
     
  )
}

export default Footer;
