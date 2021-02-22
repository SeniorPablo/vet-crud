import { Fragment } from 'react'
import '../styles/sidebar.css'

function Sidebar() {
    return (
        <Fragment>
            <div className="container sidebar-container">
                <div className="row text-center">
                    <div className="col-xs-12 col-md-12 sidebar-col-container">
                        <a href="#" className="sidebar-link">Inicio</a>
                        <a href="#" className="sidebar-link">Mascotas</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar