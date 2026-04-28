import { useState } from 'react';

const Servicios = () => {
    // Array de imágenes (puedes cambiarlas por las que quieras)
    const imagenes = [
        { id: 1, url: 'https://picsum.photos/id/10/800/500', thumb: 'https://picsum.photos/id/10/200/150', alt: 'Paisaje de montaña' },
        { id: 2, url: 'https://picsum.photos/id/20/800/500', thumb: 'https://picsum.photos/id/20/200/150', alt: 'Escritorio de trabajo' },
        { id: 3, url: 'https://picsum.photos/id/30/800/500', thumb: 'https://picsum.photos/id/30/200/150', alt: 'Taza de café' },
        { id: 4, url: 'https://picsum.photos/id/40/800/500', thumb: 'https://picsum.photos/id/40/200/150', alt: 'Gato curioso' },
    ];

    // Estado para la imagen principal seleccionada (empezamos con la primera)
    const [selectedImg, setSelectedImg] = useState(imagenes[0]);

    return (
        <div className="page-content">
            <h1>Nuestros Servicios</h1>
            <p>Explora nuestra galería interactiva de trabajos realizados.</p>

            <div className="gallery-container">
                {/* Imagen Principal con animación */}
                <div className="main-image-wrapper">
                    <img
                        src={selectedImg.url}
                        alt={selectedImg.alt}
                        className="main-image fade-in"
                        key={selectedImg.id} // La 'key' fuerza la animación al cambiar
                    />
                    <div className="image-caption">{selectedImg.alt}</div>
                </div>

                {/* Miniaturas */}
                <div className="thumbnails-grid">
                    {imagenes.map((img) => (
                        <div
                            key={img.id}
                            className={`thumb-item ${selectedImg.id === img.id ? 'active-thumb' : ''}`}
                            onClick={() => setSelectedImg(img)}
                        >
                            <img src={img.thumb} alt={img.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="card">
                <h3>¿Necesitas un proyecto similar?</h3>
                <p>Nuestra galería muestra solo una parte de lo que podemos crear para ti.</p>
            </div>
        </div>
    );
};

export default Servicios;
