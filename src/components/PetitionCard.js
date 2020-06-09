import React, {useState} from 'react'
import SignPetitionForm from './SignPetitionForm'
import PetitionInformation from './PetitionInformation'
import PetitionForm from './PetitionForm'
import PetitionsContainer from './PetitionsContainer'

export default function PetitionCard(props) {
    const [mode, setMode] = useState('INFO')

    const switchDisplay = (str) => setMode(str) 

    const addSignature = (first_name, last_name, address) => {
        fetch(props.app_url + 'petitions/' + props.id, {
            method: 'POST', 
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({
                first_name, 
                last_name, 
                address
            })
        })
        window.location = '/'
    }

    const createPetition = (name, description, submit_to, signature_goal) => {
        fetch(props.app_url + 'petitions/', {
            method: 'POST', 
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({
                name, description, submit_to, signature_goal
            })
        })
        window.location = '/'
    }

    const updatePetition = (name, description, submit_to, signature_goal) => {
        fetch(props.app_url + 'petitions/' + props.id, {
            method: 'PATCH', 
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({
                name, description, submit_to, signature_goal
            })
        })
        window.location = '/'

    }

    const sendProps = {...props, switchDisplay, createPetition, addSignature, updatePetition}

    const getDisplay = (mode) => {
        if(mode == 'EDIT') return <PetitionForm {...sendProps} /> 
        else if(mode == "SIGN") return <SignPetitionForm {...sendProps}/>
        else return <PetitionInformation {...sendProps}/> 
    }
    return getDisplay(mode)
}

