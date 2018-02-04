import React, {Component} from 'react';

class Footer extends Component {
    render () {
        return(
            <section className='footer-wrapper'>
                <ul className='footer-main-menu'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>Privacy</li>
                    <li className='nav-item'>Disclaimer</li>
                    <li className='nav-item'>Contact</li>
                </ul>
                <div className='details container-fluid'>
                    <div className='row'>
                        <div className='copyright col-sm-4 col-md-4 col-lg-4'><div className='copyright-text'>© copyright 2005 - 2011 <br/> Tina Clarke</div></div>
                        <div className='contact-details col-sm-4 col-md-4 col-lg-4'>
                            <div className='contact-details-inner-wrapper'>
                                <div className='email'>
                                    <i className="far fa-envelope"></i><span>tinaClarke@abstract-art.com</span>
                                </div>
                                <div className='phone'>
                                    <i className="fas fa-phone"></i><span>0161 2928284</span>
                                </div>
                            </div>
                        </div>
                        <div className='social-media col-sm-4 col-md-4 col-lg-4'>
                            <div className='social-media-inner-wrapper'>
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='up-arrow'>
                    <i className="fas fa-chevron-circle-up"></i>
                </div>
            </section>
        )
    }
}

export default Footer;