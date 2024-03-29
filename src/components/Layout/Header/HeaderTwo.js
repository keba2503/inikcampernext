import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BurgerMenusTwoo from './BurgerMenusTwoo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderTop from './HeaderTop';

const HeaderTwo = () => {

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
        const header = document.querySelector('.sticky-header2');
        const scrollTop = window.scrollY; 
        scrollTop >= 37 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
    };

	return (
		<React.Fragment>
			<Head>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            <title>Kimox – Digital Agency React, NextJs Template</title>

         </Head>
         <header>
            <HeaderTop />
            <div className="header-area transparent-header sticky-header2 white-bg">
                <div className="container-fluid">
                    <div className="header-space">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-8">
                                <div className="header-logo">
                                    <Link href="/"><a><img src="assets/img/logo/logo.png" className="img-fluid" alt="logo-img"/></a></Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-4">
                                <div className="main-menu main-menu-2 d-xl-block d-none">
                                    <nav id="mobile-menu">
                                        <ul>
                                          <li className="menu-item-has-children"><Link href="/"><a>Home</a></Link>
                                             <ul className="sub-menu">
                                                   <li><Link href="/"><a>Home Style 1</a></Link></li>
                                                   <li><Link href="/home-2"><a>Home Style 2</a></Link></li>
                                             </ul>
                                          </li>
                                          <li><Link href="/about"><a>About</a></Link></li>
                                          <li className="menu-item-has-children"><Link href="/service"><a>Services</a></Link>
                                             <ul className="sub-menu">
                                                   <li><Link href="/service"><a>Services</a></Link></li>
                                                   <li><Link href="/service-details"><a>Services Details</a></Link></li>
                                             </ul>
                                          </li>
                                          <li className="menu-item-has-children"><Link href="/gallery"><a>Projects</a></Link>
                                             <ul className="sub-menu">
                                                   <li><Link href="/gallery"><a>Projects</a></Link></li>
                                                   <li><Link href="/project-details"><a>Projects Details</a></Link></li>
                                             </ul>
                                          </li>
                                          <li className="menu-item-has-children"><Link href="/blog"><a>Blog</a></Link>
                                             <ul className="sub-menu">
                                                   <li><Link href="/blog"><a>Blog</a></Link></li>
                                                   <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                                             </ul>
                                          </li>
                                          <li><a href="#">Pages</a>
                                             <ul className="sub-menu">
                                                   <li><Link href="/pricing"><a>Pricing</a></Link></li>
                                                   <li><Link href="/faq"><a>Faq</a></Link></li>
                                                   <li><Link href="/about"><a>About</a></Link></li>
                                                   <li><Link href="/gallery"><a>Project</a></Link></li>
                                                   <li><Link href="/project-details"><a>Project Details</a></Link></li>
                                                   <li><Link href="/contact"><a>Contact</a></Link></li>
                                             </ul>
                                          </li>
                                       </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-4 d-none d-xl-block">
                                <div className="header-right text-end">
                                    <div className="header-social header-social-2">
                                        <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                        <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                        <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                        <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                    </div>
                                    <div className="header-search header-search-2">
                                        <a className="search-btn nav-search search-trigger" href="#!" onClick={() => {setSearchOpen(!searchOpen)}}><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                    </div>
                                    <div className="header-btn">
                                        <Link href="/contact"><a className="theme-btn theme-btn-small border-btn">Free Estimate</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <BurgerMenusTwoo menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
        <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        <div onClick={() => setSearchOpen(false)} className={searchOpen ? "body-overlay show" : "body-overlay"}></div>
		</React.Fragment>
	);
}

export default HeaderTwo;