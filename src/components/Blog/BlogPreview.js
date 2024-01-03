import React from 'react';
import {useDispatch} from 'react-redux';
import {setSelectedArticle} from '../../redux/actions/blogActions';
import Link from "next/link";

const BlogPreview = ({article}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedArticle(article));
    };

    const formattedDate = new Date(article.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const firstImageUrl = article.image ? article.image[Object.keys(article.image)[0]] : '';


    return (
        <>
            <div className="blog"
                 style={{
                     backgroundImage: `url(${firstImageUrl})`,
                     backgroundSize: '100% 100%',
                 }}>
                <div className="title-box">
                    <h3> Inik Blog </h3>
                    <hr/>
                    <div className="intro">
                        {article.title}
                    </div>
                </div>
                <div className="info">
                    <Link href={`/blog/${article.id}`}>
                        <button type="submit" className="theme-btn border-btn">Ver más</button>
                    </Link>
                </div>
                <div className="footerBlog">
                    <div className="icon-holder">
                        <span>
                            <i className="fa fa-comment-o"></i>

                            <i className="fa fa-calendar"></i>
                            <span>{formattedDate}</span>
                        </span>
                    </div>
                </div>
                <div className="color-overlay"></div>

            </div>
        </>

    )
        ;
};

export default BlogPreview;
