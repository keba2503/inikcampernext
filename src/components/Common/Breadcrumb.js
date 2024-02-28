import React from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import en from "../Layout/locale/en";
import es from "../Layout/locale/es";
import de from "../Layout/locale/de";

const Breadcrumb = (props) => {
    const {pageTitle} = props;
    const router = useRouter();
    const {locale} = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;

    return (
        <section className="page-title-area breadcrumb-spacing"
                 style={{backgroundImage: `url(${'assets/img/bg/breadcrumb-bg.jpg'})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-9">
                        <div className="page-title-wrapper text-center">
                            <h3 className="page-title mb-25">{pageTitle ? pageTitle : 'Blog'}</h3>
                            <div className="breadcrumb-menu">
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin">
                                            <Link href="/" as="/">
                                                <a><span>{t.home}</span></a>
                                            </Link>
                                        </li>
                                        <li className="trail-item trail-end">
                                            <span>{pageTitle ? pageTitle : 'Blog'}</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumb;

