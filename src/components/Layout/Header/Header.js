import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';
import HeaderSearch from './HeaderSearch';
import { Helmet } from 'react-helmet';


const Header = () => {

   const [menuOpen, setMenuOpen] = useState(false)
   const [searchOpen, setSearchOpen] = useState(false)

   const router = useRouter()
   const [path, setPath] = useState("")
   useEffect(() => {
      setPath(router.pathname)
   }, [router])

   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
         window.removeEventListener('scroll', sticky);
      };
   });

   const sticky = (e) => {
      const header = document.querySelector('.transparent-header');
      const scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
   };

   return (
      <React.Fragment>
         <Head>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            <title>InikCamper - Alquiler de autocaravanas y furgonetas en Gran Canaria</title>
         </Head>
         <Helmet>
            <link rel="icon" type="image/png" href="/assets/img/icon/camper-van.png"/>
            <meta name="description" content="Explora Gran Canaria con InikCamper. Alquiler de autocaravanas y furgonetas con servicios de camperización. ¡Tu aventura comienza aquí!" />
            <meta property="og:description" content="Alquiler de autocaravanas y furgonetas camper en Gran Canaria. Descubre la libertad de viajar con InikCamper." />
            <meta name="keywords" content="autocaravanas, campervan, furgonetas, camperización, alquiler, Gran Canaria, Las Palmas, viajes, aventuras" />
            <meta name="author" content="InikCamper" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="es" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://inikcamper.es/" />
            <meta property="og:title" content="InikCamper - Alquiler de autocaravanas y furgonetas en Gran Canaria" />
            <meta property="og:image" content="https://inikcamper.es/assets/img/slider/inikcamper_bailico.jpg" />
            <meta property="og:url" content="https://inikcamper.es/" />
            <meta property="og:type" content="website" />
            <meta name="google-site-verification" content="CQoAwfZxn41Cja-u5ndPDI6OW_YRBKWZTp5besoARdg" />

         </Helmet>
         <header>
            <div className="transparent-header">
               <div className="container-fluid">
                  <div className="header-space">
                  <div className="row align-items-center">
                        <div className="col-xl-2 col-8">
                           <div className="header-logo">
                              <Link href="/"><a><img src="assets/img/logo/logo.png" className="img-fluid" alt="logo" /></a></Link>
                           </div>
                        </div>
                        <div className="col-xl-6 col-4">
                           <div className="main-menu d-xl-block d-none">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li className="menu-item-has-children"><Link href="/"><a>Inicio</a></Link>
                                    </li>
                                    <li className="menu-item-has-children"><Link href="/"><a>Nosotros</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/about"><a>Quienes Somos</a></Link></li>
                                          <li><Link href="/team"><a>Nuestro Equipo</a></Link></li>
                                          <li><Link href="/faq"><a>Preguntas Frecuentes FAQ</a></Link></li>
                                          <li><Link href="/blog"><a>Blog</a></Link></li>
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children"><Link href="/service"><a>Servicios</a></Link></li>
                                    <li><Link href="/GuieUser"><a>Guía de usuario</a></Link></li>
                                    <li><a href="https://www.yescapa.es/campers/57378/" target="_blank"
                                           className="theme-btn theme-btn-small">Mis Reservas</a></li>
                                 </ul>
                              </nav>
                           </div>
                           <div className="side-menu-icon d-xl-none text-end">
                              <a className="search-btn nav-search search-trigger" href="#!" onClick={() => { setSearchOpen(!searchOpen) }}><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                              <button className="side-toggle" onClick={() => { setMenuOpen(!menuOpen) }}><i><FontAwesomeIcon icon={['fas', 'bars']} /></i></button>
                           </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-block">
                           <div className="header-right text-end">
                              <div className="header-social">
                                 <a href="https://wa.me/34684198547" target="_blank"><i ><FontAwesomeIcon id="whatsaap" icon={['fab', 'whatsapp']} /></i></a>
                                 <a href="https://www.instagram.com/inikcamper.es" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                 <a href="https://www.twitter.com/inikcamper" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                 <a href="https://www.facebook.com/InikCamper-113925204533049" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                              </div>
                              <div className="header-search">
                                 <a className="search-btn nav-search search-trigger" href="#!" onClick={() => { setSearchOpen(!searchOpen) }}><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                              </div>
                              <div className="header-btn">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
            <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <div onClick={() => setSearchOpen(false)} className={searchOpen ? "body-overlay show" : "body-overlay"}></div>
         </header>
      </React.Fragment>
   );
}

export default Header;