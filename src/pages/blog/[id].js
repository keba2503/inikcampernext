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

    return (
        <>
            <Header/>
            <section className="blog-details-area pt-120 pb-100">
                <div className="container">
                    <div className="blog-detail">
                        <div className="image-gallery">
                            <img
                                src="https://inikcamper.es/assets/img/slider/inikcamper_bailico.jpg"
                                alt="Imagen 2"
                                onClick={() => openModal("https://inikcamper.es/assets/img/slider/inikcamper_bailico.jpg")}
                            />
                            <img
                                src="https://picsum.photos/400/400?random=3"
                                alt="Imagen 3"
                                onClick={() => openModal("https://picsum.photos/400/400?random=3")}
                            />
                            <img
                                src="https://picsum.photos/400/400?random=4"
                                alt="Imagen 4"
                                onClick={() => openModal("https://picsum.photos/400/400?random=4")}
                            />
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
        const response = await fetch(`http://localhost:3000/api/blog/${id}`);
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
