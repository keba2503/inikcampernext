import {useState} from 'react';

const ForgotPasswordForm = () => {
    const [activeTab, setActiveTab] = useState('iniciar-sesion');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="blog-2 pt-120 pb-115">
            <div className="contenedor-formularios">
                <div className="contenido-tab">
                    <div id="iniciar-sesion" style={{display: activeTab === 'iniciar-sesion' ? 'block' : 'none'}}>
                        <h1>Nueva Contraseña</h1>
                        <form onSubmit={handleSubmit}>
                            <br/>
                            <div className="contenedor-input">
                                <label>
                                    Nueva contraseña <span className="req">*</span>
                                </label>
                                <input type="password" required/>
                            </div>
                            <div className="contenedor-input">
                                <label>
                                    Repetir contraseña <span className="req">*</span>
                                </label>
                                <input type="password" required/>
                            </div>
                            <br/>
                            <input type="submit" className="button button-block" value="Enviar"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPasswordForm;
