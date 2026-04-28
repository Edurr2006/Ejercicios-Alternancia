import { useState } from 'react';
import Blog from '../componentes/Blog.jsx';

const Servicios = () => {
    const imagenes = [
        { id: 1, url: 'https://picsum.photos/id/10/800/500', thumb: 'https://picsum.photos/id/10/200/150', alt: 'Paisaje de montaña' },
        { id: 2, url: 'https://picsum.photos/id/20/800/500', thumb: 'https://picsum.photos/id/20/200/150', alt: 'Escritorio de trabajo' },
        { id: 3, url: 'https://picsum.photos/id/30/800/500', thumb: 'https://picsum.photos/id/30/200/150', alt: 'Taza de café' },
        { id: 4, url: 'https://picsum.photos/id/40/800/500', thumb: 'https://picsum.photos/id/40/200/150', alt: 'Gato curioso' },
    ];

    const [selectedImg, setSelectedImg] = useState(imagenes[0]);

    return (
        <div className="page-content">
            <h1>Nuestros Servicios</h1>
            <p>Explora nuestra galería interactiva y nuestro blog de novedades.</p>

            {/* Galería de imágenes */}
            <div className="gallery-container">
                <div className="main-image-wrapper">
                    <img src={selectedImg.url} alt={selectedImg.alt} className="main-image fade-in" key={selectedImg.id} />
                    <div className="image-caption">{selectedImg.alt}</div>
                </div>
                <div className="thumbnails-grid">
                    {imagenes.map((img) => (
                        <div key={img.id} className={`thumb-item ${selectedImg.id === img.id ? 'active-thumb' : ''}`} onClick={() => setSelectedImg(img)}>
                            <img src={img.thumb} alt={img.alt} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Blog de posts */}
            <Blog />
        </div>
    );
};

export default Servicios;
