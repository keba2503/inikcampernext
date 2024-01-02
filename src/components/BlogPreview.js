import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedArticle } from '../redux/actions/blogActions';
import Link from 'next/link';

const BlogPreview = ({ article }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedArticle(article));
    };

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.preview}</p>
            <Link href={`/blog/${article.id}`}>
                <a onClick={handleClick}>Ver Detalle</a>
            </Link>
        </div>
    );
};

export default BlogPreview;
