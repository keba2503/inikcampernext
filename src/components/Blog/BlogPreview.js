import React from 'react';
import {useDispatch} from 'react-redux';
import {setSelectedArticle} from '../../redux/actions/blogActions';
import Link from 'next/link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BlogPreview = ({article}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedArticle(article));
    };

    return (
        <div className="kblog">
            <div className="kblog-img">
                <Link href={`/blog/${article.id}`}>
                    <img src='https://inikcamper.es/assets/img/about/about-img-1.jpg' alt="blog image" className="img-fluid"/>
                </Link>
            </div>
            <div className="kblog-text">
                <div className="kblog-meta">
                    <Link href={`/blog/${article.id}`}>
                        <a><i><FontAwesomeIcon icon={['fas', 'user-circle']}/></i> {article.user}</a>
                    </Link>
                    <Link href={`/blog/${article.id}`}>
                        <a><i><FontAwesomeIcon icon={['fas', 'comments']}/></i> {article.text}</a>
                    </Link>
                </div>
                <h3 className="kblog-text-title mb-20">
                    <Link href={`/blog/${article.id}`}>
                        <a>{article.title}</a></Link>
                </h3>
                <div className="kblog-text-link">
                    <Link href={`/blog/${article.id}`}>
                        <a>{article.title} <i><FontAwesomeIcon icon={['fas', 'chevron-right']}/></i></a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPreview;
