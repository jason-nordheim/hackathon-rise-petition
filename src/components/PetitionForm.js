import React , {useState} from 'react'

export default function PetitionForm(props) {
    const [name, setName] = useState(props.name) 
    const [description, setDescription] = useState(props.description) 
    const [submitTo, setSubmitTo] = useState(props.submit_to) 
    const [signatureGoal, setSignatureGoal] = useState(props.signature_goal) 
    return (
        <div className="petition-card">
            <form>
                <div> 
                <p>Title</p> 
                <input 
                    required
                    type="text" 
                    htmlFor="title"
                    value={ name } 
                    onChange={e => setName(e.target.value)}
                    placeholder="title"/> 

                <p>Description:  </p> 
                <textarea 
                    className="desc"
                    required
                    htmlFor="description"
                    onChange={e => setDescription(e.target.value)}
                    value={ description } 
                    placeholder="describe what this petition is for"/> 

                <p>Directed To: </p> 
                <input 
                    required
                    type="text" 
                    htmlFor="submit_to"
                    onChange={e => setSubmitTo(e.target.value)}
                    value={ submitTo } 
                    placeholder="Mayor hancock"/> 

                <p>Signature Goal</p> 
                <input 
                    required
                    type="number" 
                    htmlFor="signature_goal" 
                    onChange={e => setSignatureGoal(e.target.value)}
                    value={ signatureGoal }
                    min="1" /> 
                </div>

                <button 
                    className="btn"
                    type="button"
                    onClick={e => props.updatePetition(name, description, submitTo, signatureGoal)} >save
                </button>
                <button 
                    className="btn"
                    type="button" 
                    value="cancel"
                    onClick={e => props.switchDisplay("INFO")} > cancel
                </button>
            </form>
        </div>
    )
}
