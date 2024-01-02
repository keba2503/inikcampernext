// pages/blog.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from '../redux/actions/blogActions';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';
import Breadcrumb from "../components/Common/Breadcrumb";

const BlogPage = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.blogDetails.articles);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/blog');

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                dispatch(setArticles(data));
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <>
            <Header />
            <Breadcrumb pageTitle="Blog" />
            <div>
                {articles.map((article) => (
                    <BlogPreview key={article.id} article={article} />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default BlogPage;
