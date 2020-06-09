import React , {useState, useEffect } from 'react'
import PetitionCard from './PetitionCard'


export default function PetitionsContainer(props) {
    const [petitionElements, setPetitionElements] = useState([])
    const {app_url, petitions} = props
    
    console.log(petitions)

    useEffect(() => {
        if (petitions && petitions.length > 0) {
            const petitionsElements = petitions.map(p => ( 
                <PetitionCard key={p.id} {...p} /> ))
            setPetitionElements(petitionsElements)
        }   
    }, [])

    return (
        <div className="petition-container">
            <div>
                {petitionElements}
            </div>
            <button>Add Petition</button>
        </div>
    )
}
