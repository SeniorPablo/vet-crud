import { Fragment } from 'react'
import Footer from './Footer'

function MainForm() {
    return (
        <Fragment>
            <div className="jumbotron text-center">
                <h1>REGISTRA UN NUEVO PACIENTE</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h4 className="text-center">Lista de pacientes</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                            <li className="list-group-item">
                                <span className="lead">Eo</span>
                                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-right">Editar</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4 className="text-center">Agregar paciente</h4>
                        <form>
                            <input type="text" className="form-control mb-2" placeholder="Ingrese la tarea..." />
                            <button className="btn btn-warning btn-block" type="submit">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default MainForm