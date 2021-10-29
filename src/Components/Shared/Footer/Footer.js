import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="col-md-4 col-sm-6 col-xs-12 d-flex align-items-center justify-content-center">
                        <ul className="social-icons">
                            <li><a className="facebook"
                                   href="https://www.facebook.com/Bar-Jos%C3%A9-Ingenieros-130340603688847" ><i
                                className="fa fa-facebook"/></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"/></a></li>
                        </ul>
                    </div>
                    <div className="col-md-8 col-sm-6 col-xs-12 d-flex align-items-center justify-content-center">
                        <p className="copyright-text">Copyright © All Rights Reserved by
                            <a href="#">Nahuel De Fazio</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;