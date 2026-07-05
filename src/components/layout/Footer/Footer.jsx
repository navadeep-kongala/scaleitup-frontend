import Button from '../../ui/Button/Button';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="footer__logo">SCALEITUP</span>
          <p className="footer__tagline">
            We build systems that help businesses scale.
          </p>
          <Button href="/contact">Book a Free Strategy Call</Button>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <a href="/services/performance-marketing">Performance Marketing</a>
            <a href="/services/meta-ads">Meta Ads</a>
            <a href="/services/google-ads">Google Ads</a>
            <a href="/services">View all services</a>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <a href="tel:+91 93982 56690">+91 93982 56690</a>
            <a href="mailto:hello@scaleitup.com">hello@scaleitup.com</a>
            <a href="/contact">Hyderabad, Telangana</a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} SCALEITUP. All rights reserved.</span>
        <div className="footer__legal">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}