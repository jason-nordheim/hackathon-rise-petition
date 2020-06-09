import React from 'react'

export default function PetitionInformation(props) {
    const {switchDisplay, id, description, name, signature_goal, signees, submit_to 
    } = props 

    return (
        <div className="petition-card">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Submit to: {submit_to}</p>
                <aside>
                    <p>Signature Goal: {signature_goal}</p>
                    <p>Signed By: { signees.length } </p>
                    <button onClick={e => switchDisplay('EDIT')}>edit</button>
                    <button onClick={e => switchDisplay('SIGN')}>sign</button>
                </aside>
        </div>
    )
}
