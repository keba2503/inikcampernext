import React from 'react';
import {useDispatch} from 'react-redux';
import {setSelectedArticle} from '../../redux/actions/blogActions';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const BlogPreview = ({article}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedArticle(article));
    };

    return (
        <Col xs>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"/>
                <Card.Body style={{minHeight: '180px', position: 'relative'}}>
                    <Link href={`/blog/${article.id}`}>
                        <a><Card.Title>{article.title}</Card.Title></a>
                    </Link>
                    <div className="col-xxl-12 col-xl-12 mb-20" style={{
                        position: 'absolute',
                        bottom: '1px'
                    }}>
                        <Link href={`/blog/${article.id}`}>
                            <button type="submit" className="theme-btn border-btn">Ver más</button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogPreview;
