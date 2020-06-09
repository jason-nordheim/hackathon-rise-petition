import React , {useState, useEffect } from 'react'
import PetitionCard from './PetitionCard'


export default function PetitionsContainer(props) {
    const [petitionElements, setPetitionElements] = useState([])
    const {petitions } = props
    
    useEffect(() => {
        if (petitions && petitions.length > 0) {
            const petitionsElements = petitions.map(p => {
                return ( <PetitionCard key={p.id} {...p} /> )
            })
            setPetitionElements(petitionsElements)
        }   
    },[])

    const styles = {
        display: "flex",
        backgroundColor: "black"
    }

    return (
        <div styles={styles} className="petition-container">
            <div>
                {petitionElements}
            </div>
            <button>Add Petition</button>
        </div>
    )
}
