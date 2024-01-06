import {useState} from 'react';

const RegisterForm = () => {
    const [activeTab, setActiveTab] = useState('registrarse');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleInputChange = (e) => {
        const input = e.target;
        const label = input.previousSibling;

        if (input.value === "") {
            label.classList.remove("active", "highlight");
        } else {
            label.classList.add("active", "highlight");
        }
    };

    const handleInputBlur = (e) => {
        const input = e.target;
        const label = input.previousSibling;

        if (input.value === "") {
            label.classList.remove("active", "highlight");
        } else {
            label.classList.remove("highlight");
        }
    };

    const handleInputFocus = (e) => {
        const input = e.target;
        const label = input.previousSibling;

        if (input.value === "") {
            label.classList.remove("highlight");
        } else {
            label.classList.add("highlight");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica para manejar el envío del formulario
    };

    return (
        <section className="blog-2 pt-120 pb-115">
            <div className="contenedor-formularios">
                <ul className="contenedor-tabs">
                    <li className={`tab tab-segunda ${activeTab === 'iniciar-sesion' ? 'active' : ''}`} onClick={() => handleTabClick('iniciar-sesion')}>
                        <a href="/login">Iniciar Sesión</a>
                    </li>
                    <li className={`tab tab-primera ${activeTab === 'registrarse' ? 'active' : ''}`} onClick={() => handleTabClick('registrarse')}>
                        <a href="/register">Registrarse</a>
                    </li>
                </ul>

                <div className="contenido-tab">
                    <div id="registrarse" style={{display: activeTab === 'registrarse' ? 'block' : 'none'}}>
                        <h1>Registrarse</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="fila-arriba">
                                <div className="contenedor-input">
                                    <label>
                                        Nombre <span className="req">*</span>
                                    </label>
                                    <input type="text" onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} required/>
                                </div>

                                <div className="contenedor-input">
                                    <label>
                                        Apellido <span className="req">*</span>
                                    </label>
                                    <input type="text" onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} required/>
                                </div>
                            </div>
                            <div className="contenedor-input">
                                <label>
                                    Usuario <span className="req">*</span>
                                </label>
                                <input type="text" onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} required/>
                            </div>
                            <div className="contenedor-input">
                                <label>
                                    Email <span className="req">*</span>
                                </label>
                                <input type="email" onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} required/>
                            </div>
                            <div className="contenedor-input">
                                <label>
                                    Contraseña <span className="req">*</span>
                                </label>
                                <input type="password" onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} required/>
                            </div>

                            <div className="contenedor-input">
                                <label>
                                    Repetir Contraseña <span className="req">*</span>
                                </label>
                                <input type="password" onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} required/>
                            </div>

                            <input type="submit" className="button button-block" value="Registrarse"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;
