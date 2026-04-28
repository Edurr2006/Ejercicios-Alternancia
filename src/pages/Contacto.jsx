import { useState } from 'react';

const Contacto = () => {
    // Estados para los campos, errores y toques (blur)
    const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // Función para validar campos
    const validar = (data) => {
        let newErrors = {};
        if (!data.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';

        if (!data.email) {
            newErrors.email = 'El email es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = 'El formato de email no es válido';
        }

        if (!data.mensaje) {
            newErrors.mensaje = 'El mensaje es obligatorio';
        } else if (data.mensaje.length < 10) {
            newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        }
        return newErrors;
    };

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newData = { ...formData, [name]: value };
        setFormData(newData);
        // Validar en tiempo real si el campo ya ha sido tocado
        if (touched[name]) {
            setErrors(validar(newData));
        }
    };

    // Manejar el evento de perder el foco (onBlur)
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
        setErrors(validar(formData));
    };

    // Manejar el envío
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validar(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert('¡Formulario enviado con éxito!');
            setFormData({ nombre: '', email: '', mensaje: '' });
            setTouched({});
        }
    };

    return (
        <div className="page-content">
            <h1>Contacto</h1>
            <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text" name="nombre" value={formData.nombre}
                        onChange={handleChange} onBlur={handleBlur}
                        className={errors.nombre && touched.nombre ? 'input-error' : ''}
                    />
                    {errors.nombre && touched.nombre && <span className="error-text">{errors.nombre}</span>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} onBlur={handleBlur}
                        className={errors.email && touched.email ? 'input-error' : ''}
                    />
                    {errors.email && touched.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Mensaje</label>
                    <textarea
                        name="mensaje" value={formData.mensaje}
                        onChange={handleChange} onBlur={handleBlur}
                        className={errors.mensaje && touched.mensaje ? 'input-error' : ''}
                    ></textarea>
                    {errors.mensaje && touched.mensaje && <span className="error-text">{errors.mensaje}</span>}
                </div>

                <button type="submit" className="submit-btn" disabled={Object.keys(errors).length > 0}>
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default Contacto;
