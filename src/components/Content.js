import { Fragment } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import '../styles/content.css'

function Content() {
    return (
        <Fragment>
            <div className="row remove-space">
                <div className="col-xs-2 col-md-2 remove-space sidebar-grid">
                    <Sidebar />
                </div>
                <div className="col-xs-10 col-md-10 remove-space content-grid">
                    <Main />
                </div>
            </div>
        </Fragment>
    )
}

export default Content