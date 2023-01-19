import React from 'react';
import FooterBottom from './FooterBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Contact } from '../../Contact/contact';

const Footer = () => {

   return (

      <footer style={{ background: 'linear-gradient(to right, #c58940 0%, #d3c199 100%' }} className="pt-95 position-relative">
         <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="common-shape-inner wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
         </div>
         <div className="footer-area pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 col-sm-6">
                     <div className="widget mb-30">

                        <div className="footer-logo mb-25">
                           <Link href="/"><a><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="footer-logo" /></a></Link>
                        </div>
                        <div className="footer-social">
                           <h4 className="widget-title mb-35">Escribenos</h4>
                           <a href="https://www.twitter.com/inikcamper" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                           <a href="https://www.facebook.com/InikCamper-113925204533049" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                           <a href="https://wa.me/34684198547" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                           <a href="https://www.instagram.com/inikcamper" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                        </div>
                        <Contact />
                     </div>
                  </div>

                  <div className="col-lg-2 col-sm-6">
                     <div className="widget mb-30">
                        <h4 className="widget-title mb-35">Links</h4>
                        <ul>
                           <li><Link href="/service"><a>Servicios</a></Link></li>
                           <li><Link href="/about"><a>Equipo</a></Link></li>
                           <li><Link href="/booking"><a>Reservas</a></Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">

                     <div className="widget widget-contact mb-30">
                        <h4 className="widget-title mb-35">Contacto</h4>
                        <ul>
                           <li className="pb-10">Gran Canaria - España <br /></li>
                           <li><img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img" /><a href="mailto:needhelp@company.com">inikcamper@gmail.com</a></li>
                           <li><img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img" /><a href="tel:+34-684198547">+34-684198547</a></li>
                        </ul>
                     </div>
                  </div>

               </div>
            </div>
         </div>


         <FooterBottom />


      </footer>
   );
}

export default Footer;