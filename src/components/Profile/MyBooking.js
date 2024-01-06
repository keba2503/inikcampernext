import React from 'react';

const MyBooking = () => {
    return (
        <section className="blog-2 pt-120 pb-115">
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <a className="nav-link" href="/profile">Mi cuenta</a>
                    <a className="nav-link" href="/booking">Mis reservas</a>
                </nav>
                <hr className="mt-0 mb-4"/>
                <div className="row">
                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Detalle de reserva</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputUsername">ID de reserva</label>
                                        <input className="form-control" id="inputUsername" type="text" placeholder="Usuario" value="000123456789"/>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Fecha de entrada</label>
                                            <input className="form-control" id="inputLastName" type="text" placeholder="Fecha de entrada" value="01/01/2023"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Fecha de Salida</label>
                                            <input className="form-control" id="inputLastName" type="text" placeholder="Fecha de entrada" value="01/01/2023"/>
                                        </div>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Vehiculo</label>
                                            <input className="form-control" id="inputLastName" type="text" placeholder="Fecha de entrada" value="InikDark"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Estado</label>
                                            <input className="form-control" id="inputLastName" type="text" placeholder="Repetir contraseña" value="pagado"/>
                                        </div>
                                    </div>
                                    <div className="button-container-profile">
                                        <button className="theme-btn border-btn" type="button">Editar</button>
                                    </div>
                                    <div className="button-container-profile">
                                        <button className="theme-btn border-btn" type="button">Cancelar Reserva</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyBooking;
