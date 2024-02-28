import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import en from '../locale/en'
import es from '../locale/es'
import LanguageSelector from "./LanguageSelector";
import de from "../locale/de";

const BurgerMenus = ({setMenuOpen, menuOpen}) => {

    const [home, setHome] = useState(false)
    const [courses, setcourses] = useState(false)
    const [blog, setBlog] = useState(false)
    const [pages, setPages] = useState(false)
    const [project, setProject] = useState(false)
    const router = useRouter()
    const [path, setPath] = useState("")
    const {locale} = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;

    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    const openMobileMenu = menu => {

        if (menu == 'home') {
            setHome(!home)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
        } else if (menu == 'courses') {
            setHome(false)
            setcourses(!courses)
            setBlog(false)
            setPages(false)
            setProject(false)
        } else if (menu == 'blog') {
            setHome(false)
            setcourses(false)
            setBlog(!blog)
            setPages(false)
            setProject(false)
        } else if (menu == 'pages') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setProject(false)
            setPages(!pages)
        } else if (menu == 'project') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(!project)
        }
    };

    return (
        <div className="fix">
            <div className={menuOpen ? "side-info info-open" : "side-info"}>
                <button className="side-info-close" onClick={() => setMenuOpen(false)}>
                    <i><FontAwesomeIcon icon={['fas', 'times']}/></i>
                </button>
                <div className="side-info-content">
                    <div className="mm-menu">
                        <ul>
                            <li><Link href="/"><a>{t.home}</a></Link></li>
                            <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => {
                                    openMobileMenu('courses');
                                }}>{t.aboutUs}</a>
                                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/about"><a>{t.whoWeAre}</a></Link></li>
                                    <li><Link href="/team"><a>{t.ourTeam}</a></Link></li>
                                    <li><Link href="/faq"><a>{t.faq}</a></Link></li>
                                    <li><Link href="/blog"><a>{t.blog}</a></Link></li>
                                </ul>
                            </li>
                            <li><Link href="/service"><a>{t.services}</a></Link></li>
                            <li><Link href="/GuieUser"><a>{t.userGuide}</a></Link></li>
                            <li><a href="https://airbnb.com/h/inikcamper" target="_blank">{t.myBookings}</a></li>
                            <br/>
                            <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                                <LanguageSelector className='sub-menu'/>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-infos mb-30">
                        <div className="contact-list mb-30">
                            <h4>{t.contact}</h4>
                            <ul>
                                <li>
                                    <img src="assets/img/icon/sidebar-icon-1.png" className="img-fluid" alt="icon-img"/>Gran Canaria
                                </li>
                                <li>
                                    <img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img"/><a href={`mailto:inikcamper@gmail.com`}>inikcamper@gmail.com</a>
                                </li>
                            </ul>
                            <div className="sidebar__menu--social">
                                <a href="https://www.instagram.com/inikcamper.es/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']}/></i></a>
                                <a href="https://wa.me/34684198547" target="_blank"><i><FontAwesomeIcon id="whatsaap" icon={['fab', 'whatsapp']}/></i></a>
                                <a href="https://twitter.com/inikcamper.es" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
                                <a href="https://www.facebook.com/InikCamper-113925204533049" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']}/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenus;