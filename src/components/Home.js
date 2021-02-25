import '../styles/animation.css'
import Wolf from '../assets/img/wolf.svg'
import { Fragment } from 'react'

function Home() {
    return (
        <Fragment>
            <div className="context">
                <img src={Wolf} className="wolf-image" />
            </div>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </Fragment>

    )
}

export default Home