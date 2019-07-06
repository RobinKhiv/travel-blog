import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div>
                        <a>HOME</a>
                    </div>
                    <ul>
                        <li>
                            TRAVEL
                        </li>
                        <li>
                            EAT
                        </li>
                        <li>
                            ATTEND
                        </li>
                        <li>
                            ABOUT ME
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
