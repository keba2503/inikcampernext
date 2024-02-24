import React, {useState} from 'react';
import Modal from 'react-modal';
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import {useDispatch} from "react-redux";

const BlogDetail = ({selectedArticle}) => {
    const dispatch = useDispatch();

    if (!selectedArticle) {
        return (
            <>
                <Header/>
                <div>Loading...</div>
                <Footer/>
            </>
        );
    }

    const paragraphs = selectedArticle.text.split('\n').map((line, index) => (
        <p key={index} style={{marginBottom: '30px', textAlign: 'justify'}}>
            {line}
        </p>
    ));
    const formattedDate = new Date(selectedArticle.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    let images = [];

    if (selectedArticle.image) {
        images = Object.entries(selectedArticle.image).map(([id, url]) => ({
            id,
            url,
        }));
    }

    return (
        <>
            <Header/>
            <section className="blog-details-area pt-120 pb-100">
                <div className="container">
                    <div className="blog-detail">
                        <div className="container-gallery">
                            {images.map((image, index) => (
                                <div key={index} className={`popup popup-${index + 1}`}>
                                    <img
                                        className="img-responsive"
                                        alt={`Pop Up Gallety ${index + 1}`}
                                        src={image.url}
                                        onClick={() => openModal(image.url)}
                                    />
                                </div>
                            ))}
                        </div>


                        <div className="text-content">
                            <h1>{selectedArticle.title}</h1>
                            <p>{formattedDate}</p>
                            {paragraphs}
                        </div>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Imagen en grande"
                        >
                            {selectedImage && (
                                <img
                                    src={selectedImage}
                                    alt="Imagen en grande"
                                    style={{maxWidth: '100%', maxHeight: '100%'}}
                                />
                            )}
                            <button className='close-button' onClick={closeModal}>X</button>
                        </Modal>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};


export async function getServerSideProps({params}) {
    const {id} = params;

    try {
        const response = await fetch(`https://inikcamper.comapi/blog/${id}`);
        const selectedArticle = await response.json();

        if (!response.ok) {
            throw new Error('Failed to fetch article details');
        }

        return {
            props: {
                selectedArticle,
            },
        };
    } catch (error) {
        console.error('Error fetching article details:', error);

        return {
            props: {
                selectedArticle: null,
                error: 'Failed to fetch article details',
            },
        };
    }
}

export default BlogDetail;
