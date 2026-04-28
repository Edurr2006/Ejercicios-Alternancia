import { useState } from 'react';

/**
 * Componente Blog - Sistema dinámico de publicaciones
 * Permite crear, editar, eliminar y destacar posts sin recargar la página
 */
const Blog = () => {
    // Estado del formulario de nuevo post
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    // Estado de la lista de posts publicados
    const [posts, setPosts] = useState([
        { id: 1, titulo: 'Bienvenida al Blog', descripcion: 'Este es el primer post del blog. ¡Aquí puedes publicar tus novedades!', destacado: false },
    ]);

    // Estado para saber qué post se está editando
    const [editandoId, setEditandoId] = useState(null);

    // Publicar o guardar un post (nuevo o editado)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo.trim() || !descripcion.trim()) return;

        if (editandoId !== null) {
            // Modo edición: actualizar el post existente
            setPosts(posts.map(p =>
                p.id === editandoId ? { ...p, titulo, descripcion } : p
            ));
            setEditandoId(null);
        } else {
            // Modo creación: añadir nuevo post
            const nuevoPost = { id: Date.now(), titulo, descripcion, destacado: false };
            setPosts([nuevoPost, ...posts]);
        }
        setTitulo('');
        setDescripcion('');
    };

    // Eliminar un post por su ID
    const handleEliminar = (id) => {
        setPosts(posts.filter(p => p.id !== id));
    };

    // Cargar los datos de un post en el formulario para editarlo
    const handleEditar = (post) => {
        setEditandoId(post.id);
        setTitulo(post.titulo);
        setDescripcion(post.descripcion);
    };

    // Alternar el estado "destacado" de un post
    const handleDestacar = (id) => {
        setPosts(posts.map(p =>
            p.id === id ? { ...p, destacado: !p.destacado } : p
        ));
    };

    return (
        <div className="blog-section">
            <h2>Blog de Novedades</h2>

            {/* Formulario para crear / editar posts */}
            <form className="blog-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título del post"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="blog-input"
                />
                <textarea
                    placeholder="Descripción del post..."
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="blog-textarea"
                />
                <button type="submit" className="blog-submit-btn">
                    {editandoId !== null ? '💾 Guardar Cambios' : '➕ Publicar Post'}
                </button>
                {editandoId !== null && (
                    <button type="button" className="blog-cancel-btn" onClick={() => { setEditandoId(null); setTitulo(''); setDescripcion(''); }}>
                        Cancelar
                    </button>
                )}
            </form>

            {/* Lista de posts generados dinámicamente */}
            <div className="posts-list">
                {posts.length === 0 && <p className="no-posts">No hay posts publicados aún.</p>}
                {posts.map((post) => (
                    <div key={post.id} className={`post-card ${post.destacado ? 'post-destacado' : ''}`}>
                        <div className="post-header">
                            <h3>{post.titulo}</h3>
                            {post.destacado && <span className="badge-destacado">⭐ Destacado</span>}
                        </div>
                        <p>{post.descripcion}</p>
                        <div className="post-actions">
                            <button onClick={() => handleDestacar(post.id)} className="btn-action btn-destacar">
                                {post.destacado ? '★ Quitar' : '☆ Destacar'}
                            </button>
                            <button onClick={() => handleEditar(post)} className="btn-action btn-editar">✏️ Editar</button>
                            <button onClick={() => handleEliminar(post.id)} className="btn-action btn-eliminar">🗑️ Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
