import React, {useState} from 'react'
import SignPetitionForm from './SignPetitionForm'

export default function PetitionCard(props) {
    const {
        id, 
        name, 
        description, 
        submit_to, 
        signature_goal,  
        signees
    } = props 
    const [edit, setEdit] = useState(false)
    const save = () => {    }

    
    return edit 
        ? (
            <div className="petition-card">
                <form>
                    <p>Title</p>
                    <input value={name} size='100'/> 

                    <p>Description</p>
                    <input type="text" value={description} size='300'/>
             

                    <input type="button" value="cancel" onClick={e => setEdit(!edit)} />
                    <input type="button" value="save" onClick={e => save(!edit)} />

                </form>
            </div> 
        )
        : (
            <div className="petition-card">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Submit to: {submit_to}</p>
                <aside>
                    <p>Signature Goal: {signature_goal}</p>
                    <p>Signed By: { signees.length } </p>
                    <button onClick={e => setEdit(!edit)}>edit</button>
                    <button>sign</button>
                </aside>
            </div>
        )
}
