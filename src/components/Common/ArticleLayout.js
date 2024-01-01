import React from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ArticleLayout = ({post}) => {

    return (
        <div className="kblog">
            <div className="kblog-img">
                <Link href={{
                    pathname: `/blog/${post.id}`,
                }}>
                    <img src={'/' + post.image} alt="blog image" className="img-fluid"/>
                </Link>
                <span>{post.date}</span>
            </div>
            <div className="kblog-text">
                <div className="kblog-meta">
                    <Link href={{
                        pathname: `/blog/${post.id}`,
                    }}>
                        <a><i><FontAwesomeIcon icon={['fas', 'user-circle']}/></i> {post.user}</a>
                    </Link>
                    <Link href={{
                        pathname: `/blog/${post.id}`,
                    }}>
                        <a><i><FontAwesomeIcon icon={['fas', 'comments']}/></i> {post.comments}</a>
                    </Link>
                </div>
                <h3 className="kblog-text-title mb-20">
                    <Link href={{
                        pathname: `blog/${post.id}`,
                    }}>
                        <a>{post.title}</a></Link>
                </h3>
                <div className="kblog-text-link">
                    <Link href={{
                        pathname: `blog/${post.id}`,
                    }}>
                        <a>{post.button} <i><FontAwesomeIcon icon={['fas', 'chevron-right']}/></i></a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ArticleLayout;