import React, {useState} from 'react';
import FooterBottom from './FooterBottom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {useRouter} from "next/router";
import en from "../locale/en";
import es from "../locale/es";
import de from "../locale/de";

const Footer = () => {
    const router = useRouter()
    const [path, setPath] = useState("")
    const {locale} = router;

    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;

    return (

        <footer style={{background: 'linear-gradient(to right, #c58940 0%, #d3c199 100%'}} className="pt-95 position-relative">
            <div className="footer-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="widget mb-30">

                                <div className="footer-social">
                                    <a href="/contact" target="_blank">
                                        <h4 className="widget-title mb-35">{t.contactUs}</h4></a>
                                    <a href="https://www.twitter.com/inikcamper" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
                                    <a href="https://www.facebook.com/InikCamper-113925204533049" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']}/></i></a>
                                    <a href="https://wa.me/34684198547" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']}/></i></a>
                                    <a href="https://www.instagram.com/inikcamper.es" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']}/></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <div className="widget mb-30">
                                <h4 className="widget-title mb-35">{t.links}</h4>
                                <ul>
                                    <li><Link href="/service"><a>{t.services}</a></Link></li>
                                    <li><Link href="/about"><a>{t.team}</a></Link></li>
                                    <li><Link href="/booking"><a>{t.bookings}</a></Link></li>
                                    <li><Link href="/contact"><a>{t.writeUs}</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">

                            <div className="widget widget-contact mb-30">
                                <h2 className="widget-title mb-35">{t.contactUs}</h2>
                                <ul>
                                    <li className="pb-10">Gran Canaria - España <br/></li>
                                    <li>
                                        <img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img"/><a href="mailto:inikcamper@gmail">inikcamper@gmail.com</a>
                                    </li>
                                    <li>
                                        <img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img"/><a href="tel:+34-684198547">+34-684198547</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <FooterBottom/>
        </footer>
    );
}

export default Footer;