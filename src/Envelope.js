import React from 'react'
import './envelope.css'

export default function Envelope(props) {
    return (
        <>
            <h1 className="display-4 mt-4">envelope</h1>
            <div className="envelope d-flex flex-column align-items-center">
                <div className="toprow d-flex ml-auto justify-content-between">
                    <AddressLabel className="flotleft" who={props.mail.sender} />
                    <img className="stamp" src={props.mail.sender.stamp} alt="stamp"/>
                </div>
                <AddressLabel className="to justify-content-center" who={props.mail.receiver}/>
            </div>
        </>
    )
}


function AddressLabel (props) {
    return (
        <div className="mail">
            <p className="font-weight-bold">{props.who.name}</p>
            <p>{props.who.address}</p>
            <p>{props.who.city}</p>
        </div>
    )
}