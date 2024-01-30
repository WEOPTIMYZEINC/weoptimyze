import './footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>Your tech recruitment firm's brief description here...</p>
                </div>
                <div className="footer-navigation">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-social-media">
                <h3>Connect with Us</h3>
                <a href="your-linkedin-link" className="social-icon icon-linkedin" title="LinkedIn"></a>
                <a href="https://www.facebook.com/YourPage" className="social-icon icon-facebook" title="Facebook"></a>
                <a href="your-twitter-link" className="social-icon icon-twitter" title="Twitter"></a>
                <a href="your-instagram-link" className="social-icon icon-instagram" title="Instagram"></a>
            </div>
                <div className="footer-legal">
                    <p>&copy; {currentYear} Your Tech Recruitment Firm. All rights reserved.</p>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
