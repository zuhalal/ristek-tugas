import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default class Footer extends Component {
    render() {
        return (
            <div>
            <div className="left-0 right-0 h-36 bg-blue-600 bottom-0  flex flex-row justify-center items-center w-full mt-10">
                <div className="socmed-icon flex lg:w-1/3 w-2/3 justify-center ">
                    <div className="github lg:w-1/6 w-1/3">
                        <span className="text-5xl text-white"><a href="https://github.com/zuhalal"><FontAwesomeIcon icon={faGithubSquare} /></a></span>
                    </div>
                    <div className="Linkedin lg:w-1/6 w-1/3">
                        <span className="text-5xl text-white"><a href="https://www.linkedin.com/in/zuhal-alimul-hadi-926b681b3/"><FontAwesomeIcon icon={faLinkedin} /></a></span>
                    </div>
                    <div className="gmail lg:w-1/6 w-1/3">
                        <span className="text-5xl text-white"><a href="mailto:zuhalalimulhadi19@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></span>
                    </div>
                </div>
                <div className="footer-title flex  w-2/3 justify-start">
                    <h2 className="text-center text-lg font-Roboto text-white">&lt;/Coded&gt; by Zuhal 'Alimul Hadi</h2>
                </div>
            </div>
        </div>
        )
    }
}
