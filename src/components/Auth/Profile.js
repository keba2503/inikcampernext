import React from 'react';

const ProfilePage = () => {
    return (
        <section className="blog-2 pt-120 pb-115">
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <a className="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Mi cuenta</a>
                    <a className="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Mis reservas</a>
                </nav>
                <hr className="mt-0 mb-4"/>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Mi perfil</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                <div className="small font-italic text-muted mb-4">JPG or PNG max 5 MB</div>
                                <div className="button-container-profile">
                                    <button className="theme-btn border-btn" type="button">Cambiar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Detalle de su perfil</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputUsername">Usuario</label>
                                        <input className="form-control" id="inputUsername" type="text" placeholder="Usuario"/>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputFirstName">Nombre</label>
                                            <input className="form-control" id="inputFirstName" type="text" placeholder="Nombre"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Apellidos</label>
                                            <input className="form-control" id="inputLastName" type="text" placeholder="Apellidos"/>
                                        </div>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputPassword">Nueva contraseña</label>
                                            <input className="form-control" id="inputFirstName" type="text" placeholder="Nueva contraseña"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Repetir nueva contraseña</label>
                                            <input className="form-control" id="inputLastName" type="text" placeholder="Repetir contraseña"/>
                                        </div>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputLocation">Dirección</label>
                                            <input className="form-control" id="inputLocation" type="text" placeholder="Dirección"/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">Correo electronico</label>
                                        <input className="form-control" id="inputEmailAddress" type="email" placeholder="Correo electrónico"/>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputPhone">Teléfono</label>
                                            <input className="form-control" id="inputPhone" type="tel" placeholder="Teléfono"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputBirthday">Fecha de nacimiento</label>
                                            <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="01/01/1970"/>
                                        </div>
                                    </div>
                                    <div className="button-container-profile">
                                        <button className="theme-btn border-btn" type="button">Guardar cambios</button>
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

export default ProfilePage;
