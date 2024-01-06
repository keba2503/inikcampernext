import React from 'react';

const ProfileBookingPage = () => {
    return (
        <section className="blog-2 pt-120 pb-115">
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <a className="nav-link ms-0" href="/profile">Mi cuenta</a>
                    <a className="nav-link active" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Mis reservas</a>
                </nav>
                <hr className="mt-0 mb-4"/>
                <div className="row">
                    <div className="table-responsive table-billing-history">
                        <table className="table mb-0">
                            <thead>
                            <tr>
                                <th className="border-gray-200" scope="col">ID de reserva</th>
                                <th className="border-gray-200" scope="col">Fecha de entrada</th>
                                <th className="border-gray-200" scope="col">Fecha de salida</th>
                                <th className="border-gray-200" scope="col">Coche</th>
                                <th className="border-gray-200" scope="col">Importe</th>
                                <th className="border-gray-200" scope="col">Estado</th>
                                <th className="border-gray-200" scope="col">Detalle</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#39201</td>
                                <td>06/12/2021</td>
                                <td>06/01/2022</td>
                                <td>InikDark</td>
                                <td>€299.99</td>
                                <td><span className="badge bg-warning">Pendiente</span></td>
                                <td>Ver detalle</td>
                            </tr>
                            <tr>
                                <td>#38594</td>
                                <td>05/15/2021</td>
                                <td>05/15/2021</td>
                                <td>InikLight</td>
                                <td>€299.99</td>
                                <td><span className="badge bg-success">Pagada</span></td>
                                <td>Ver detalle</td>
                            </tr>
                            <tr>
                                <td>#38594</td>
                                <td>05/15/2021</td>
                                <td>05/15/2021</td>
                                <td>InikDark</td>
                                <td>€299.99</td>
                                <td><span className="badge bg-success">Terminada</span></td>
                                <td>Ver detalle</td>
                            </tr>
                            <tr>
                                <td>#38594</td>
                                <td>05/15/2021</td>
                                <td>05/15/2021</td>
                                <td>Fiat 500L</td>
                                <td>€299.99</td>
                                <td><span className="badge bg-danger">Cancelada</span></td>
                                <td>Ver detalle</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileBookingPage;
