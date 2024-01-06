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
                        <h1>Olvidaste tú contraseña</h1>
                        <form onSubmit={handleSubmit}>
                            <br/>

                            <div className="contenedor-input">
                                <label className='labelLogin'>
                                    Email <span className="req">*</span>
                                </label>
                                <br/>
                                <br/>
                                <br/>
                                <input className='inputLogin' type="email" required/>
                            </div>
                            <p className="forgot">Te enviaremos un correo electronico para que restablezcas tu contraseña</p>
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
