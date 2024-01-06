import {useState} from 'react';

const LoginForm = () => {
    const [activeTab, setActiveTab] = useState('iniciar-sesion');

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
                    <div id="iniciar-sesion" style={{display: activeTab === 'iniciar-sesion' ? 'block' : 'none'}}>
                        <h1>Iniciar Sesión</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="contenedor-input">
                                <label className='labelLogin'>
                                    Usuario <span className="req">*</span>
                                </label>
                                <input className='inputLogin' type="text" onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} required/>
                            </div>

                            <div className="contenedor-input">
                                <label className='labelLogin'>
                                    Contraseña <span className="req">*</span>
                                </label>
                                <input className='inputLogin' type="password" onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} required/>
                            </div>
                            <p className="forgot"><a href="/emailPassword">Se te olvidó la contraseña?</a></p>
                            <input  type="submit" className="button button-block" value="Iniciar Sesión"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
