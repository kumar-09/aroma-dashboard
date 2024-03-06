import { Link } from "react-router-dom";

function Footer(){
    return (
        <div className="footer">
            <img className = "footer-img" src="#" alt="Aroma Delight Dhaba" />
            <h4 className="copyright">Copyright &copy; 2027</h4>
            <ul className="footer-link-list">
                <Link to="/TNC"><li className="footer-links">Terms and Conditions</li></Link>
                <Link to = "/about-us"><li className="footer-links">About Us</li></Link>
                <Link to = "/contact-us"><li className="footer-links">Contact Us</li></Link>
            </ul>

        </div>
    )
}

export default Footer;