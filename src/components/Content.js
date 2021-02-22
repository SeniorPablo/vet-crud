import { Fragment } from 'react'
import MainForm from './MainForm'
import Sidebar from './Sidebar'
import '../styles/content.css'

function Content() {
    return (
        <Fragment>
            <div className="row remove-space">
                <div className="col-xs-2 col-md-2 remove-space sidebar-grid">
                    <Sidebar />
                </div>
                <div className="col-xs-10 col-md-10 remove-space">
                    <MainForm />
                </div>
            </div>
        </Fragment>
    )
}

export default Content