import React, {useState} from 'react'

export default function SignPetitionForm(props) {
    const [firstName, setFirstName] = useState(props.first_name ? props.first_name : "")
    const [lastName, setLastName] = useState(props.last_name? props.last_name : "")
    const [address, setAddress] = useState(props.address ? props.address : "")
    return (
        <div className="petition-card">
            <form>
                    <p>First Name</p>
                    <input for="first_name" value={firstName} onChange={e => setFirstName(e.target.value)}/> 
                    <p>Last Name</p>
                    <input for="last_name" value={lastName} onChange={e => setLastName(e.target.value)} /> 
                    <p>Address</p>
                    <input for="address" value={address} onChange={e => setAddress(e.target.value)} />
                    <br /> 
                <button  onClick={e => props.addSignature(firstName, lastName  , address)} >Sign</button>
                <button onClick={e => props.switchDisplay('INFO')} >cancel></button> 
            </form>
        </div>
    )
}
