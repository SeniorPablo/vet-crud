import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

function Sidebar() {
    return (
        <Fragment>
            <div className="container sidebar-container">
                <div className="row text-center">
                    <div className="col-xs-12 col-md-12 sidebar-col-container">
                        <Link to="/" className="sidebar-link">Inicio</Link>
                        <Link to="/main-form" className="sidebar-link">Mascotas</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar