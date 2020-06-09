import React , {useState, useEffect } from 'react'
import PetitionCard from './PetitionCard'
import PetitionForm from './PetitionForm'


export default function PetitionsContainer(props) {
    const [petitionElements, setPetitionElements] = useState([])
    const [addingPetition, setAddingPetition] = useState(false)
    const {app_url, petitions} = props
    
    useEffect(() => {
        if (petitions && petitions.length > 0) {
            const petitionsElements = petitions.map(p => ( <PetitionCard key={p.id} {...p} app_url={app_url} /> ))
            setPetitionElements(petitionsElements)
        }   
    }, [])

    const switchDisplay = (value) => {
        setAddingPetition(false)
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

    return (
        <div className="petition-container">
        {addingPetition 
            ? <PetitionForm switchDisplay={switchDisplay} updatePetition={createPetition} /> 
            : (
                <div className="center">
                <button onClick={e => setAddingPetition(true)}>Add Petition</button>
                {petitionElements}
                </div>) 
        }
        </div>
    )
}
