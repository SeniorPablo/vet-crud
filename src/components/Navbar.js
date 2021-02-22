import { Fragment } from 'react'
import Logo from '../assets/img/logo.svg'
import '../styles/navbar.css'

function Navbar() {
    return (
        <Fragment>
            <nav className="navbar bg-nav fixed-top">
                <div className="row container-fluid">
                    <div className="col-xs-2 col-md-2"></div>
                    <div className="col-xs-10 col-md-10 remove-space">
                        <div className="row container-fluid remove-space">
                            <div className="col-xs-12 col-md-12 remove-space">
                                <img src={Logo} className="d-inline-block logo-img" alt="logo" />
                                <h1 className="d-inline-block text-white nav-title">WONDER ANIMAL</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar