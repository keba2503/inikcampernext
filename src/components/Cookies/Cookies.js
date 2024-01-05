import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(!Cookies.get('cookiesAccepted'));
    const [showConfigOptionsModal, setShowConfigOptionsModal] = useState(false);
    const [functionalCookies, setFunctionalCookies] = useState(true);
    const [analyticsCookies, setAnalyticsCookies] = useState(true);
    const [navigationCookies, setNavigationCookies] = useState(true);
    const [advertisingCookies, setAdvertisingCookies] = useState(true);

    useEffect(() => {
        // Deshabilita el scroll de la página cuando el modal está abierto
        if (showBanner || showConfigOptionsModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showBanner, showConfigOptionsModal]);

    const handleAcceptCookies = () => {
        Cookies.set('cookiesAccepted', 'true', {expires: 365});
        setShowBanner(false);
    };

    const handleConfigOptions = () => {
        setShowConfigOptionsModal(true);
    };

    const handleConfigClose = () => {
        setShowConfigOptionsModal(false);
    };

    const handleConfigOptionsAccept = () => {
        // Aquí puedes manejar la lógica para guardar las opciones de cookies seleccionadas
        setShowConfigOptionsModal(false);
    };

    return (
        <>
            {showBanner && (
                <div className="cookie-overlay" onClick={() => setShowBanner(false)}>
                    <div className="cookie-banner" onClick={(e) => e.stopPropagation()}>
                        <h2>Aviso de cookies</h2>
                        <p>
                            Utilizamos cookies propias y de terceros para fines técnicos y estadísticos (recopilar información estadística sobre las páginas visitadas). Puedes aceptar todas las cookies pulsando el botón “Aceptar” o configurarlas.
                        </p>
                        <div className="button-container">
                            <button className='theme-btn border-btn' onClick={handleAcceptCookies}>Aceptar</button>
                            <button className='theme-btn border-btn' onClick={handleConfigOptions}>Configurar</button>
                        </div>
                    </div>
                </div>
            )}

            {showConfigOptionsModal && (
                <div className="cookie-overlay" onClick={() => setShowConfigOptionsModal(false)}>
                    <div className="cookie-options-banner" onClick={(e) => e.stopPropagation()}>
                        <h2>Opciones de cookies</h2>
                        <div className="checkbox-container">
                            <div>
                                <label>
                                    <input type="checkbox" checked={functionalCookies} onChange={() => setFunctionalCookies(!functionalCookies)}/>
                                    Funcionales
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" checked={analyticsCookies} onChange={() => setAnalyticsCookies(!analyticsCookies)}/>
                                    Analíticas
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" checked={navigationCookies} onChange={() => setNavigationCookies(!navigationCookies)}/>
                                    Navegación
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" checked={advertisingCookies} onChange={() => setAdvertisingCookies(!advertisingCookies)}/>
                                    Publicidad
                                </label>
                            </div>
                        </div>
                        <div className="button-container-options">
                            <button className='theme-btn border-btn' onClick={handleConfigOptionsAccept}>Aceptar</button>
                            <button className='theme-btn border-btn' onClick={handleConfigClose}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieBanner;
