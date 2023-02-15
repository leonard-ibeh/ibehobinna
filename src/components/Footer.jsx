import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={logo} alt="Footer Logo" />
          </Link>
          <p>
            The last part of the the project is the one i am working on to see
            the best of of my self The last part of the the project is the one i
            am working on to see the best of of my self
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://Twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://Instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/$">Blog</Link>
          <Link to="/$">Case Studies</Link>
          <Link to="/$">Events</Link>
          <Link to="/$">Communities</Link>
          <Link to="/$">FAQs</Link>
        </article>
        <article>
          <h4>Get in touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/$">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 &copy; ALL Right Reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
