import React, {Component} from 'react';
import Link from 'next/link';

class BlogSidebarPost extends Component {

    render() {

        return (
            <div className="widget_-latest-posts mb-30">
                <div className="sidebar__widget-content">
                    <div className="rc-post d-flex mb-15">
                        <div className="rc-thumb">
                            <Link href="/blog-details">
                                <a><img src="assets/img/blog/sidebar-post-img1.jpg" alt="blog-img"/></a>
                            </Link>
                        </div>
                        <div className="rc-text"></div>
                    </div>
                    <div className="rc-post d-flex mb-15">
                        <div className="rc-thumb">
                            <Link href="/blog-details">
                                <a><img src="assets/img/blog/sidebar-post-img2.jpg" alt="blog-img"/></a>
                            </Link>
                        </div>
                        <div className="rc-text">

                        </div>
                    </div>
                    <div className="rc-post d-flex">
                        <div className="rc-thumb">
                            <Link href="/blog-details">
                                <a><img src="assets/img/blog/sidebar-post-img3.jpg" alt="blog-img"/></a>
                            </Link>
                        </div>
                        <div className="rc-text"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSidebarPost;