import { Link } from "react-router-dom";

function Footer({footerref}){
    return (
        <div className="footer" ref={footerref} >
            <h4 className="copyright">Copyright &copy; 2024</h4>
            <img className = "footer-img" src="https://dukaan.b-cdn.net/600x600/webp/4420984/58dfd4d9-6975-4e74-9027-758740ffcbf6/image-78227dda-6d27-4026-9733-56dd23d462bc.png" alt="Aroma Delight Dhaba" />
            
            <ul className="footer-link-list">
                <Link to="/TNC" style = {{textDecoration: "none"}}><li className="footer-links">Terms and Conditions</li></Link>
                <Link to = "/about-us" style = {{textDecoration: "none"}}><li className="footer-links">About Us</li></Link>
                <Link to = "/contact-us" style = {{textDecoration: "none"}} ><li className="footer-links" >Contact Us</li></Link>
            </ul>

        </div>
    )
}

export default Footer;