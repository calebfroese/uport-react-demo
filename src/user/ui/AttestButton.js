import React, {Component} from 'react';
import {uport} from '../../util/connectors';

export default class AttestButton extends Component {
    attest() {
        console.log('Attesting');
        uport.requestCredentials().then(creds => {
            uport.attestCredentials({
                sub: creds.address,
                claim: {
                    Event: "Some Event",
                    "Date": new Date().toDateString(),
                    "Details": "Some field"
                }
            })
        })
    }
    render() {
        return (
            <a href="#" className="pure-menu-link" onClick={() => this.attest()}>Attest</a>
        )
    }
}