import { Fragment } from 'react'
import Logo from '../assets/img/logo.svg'
import '../styles/footer.css'

function Footer() {
    return (
        <Fragment>
            <div className="card card-footer-container">
                <div className="card-body body-card-footer">
                    <div className="row text-center align-items-center">
                        <div className="col-xs-4 col-md-4">
                            <h3>Contáctanos</h3>
                            <h3>Sobre nosotros</h3>
                        </div>
                        <div className="col-xs-4 col-md-4">
                            <img src={Logo} alt="footer-logo" className="footer-img" />
                        </div>
                        <div className="col-xs-4 col-md-4">
                            <h3>Misión</h3>
                            <h3>Visión</h3>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted text-center">
                    Copyright © Juan Pablo González David - Programación Distribuida 2021-1
                </div>
            </div>
        </Fragment>
    )
}

export default Footer