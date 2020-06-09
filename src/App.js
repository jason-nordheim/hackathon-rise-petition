import React, {useState, useEffect} from 'react';
import PetitionContainer from './components/PetitionsContainer'

function App() {
  const TITLE = `Rise above`
  const BASE_URL = `http://localhost:3000/`

  // const [signees, setSignees] = useState([])
  const [petitions, setPetitions] = useState([])
  const [loaded, setLoaded] = useState(false)

  // const getSignees = () => {
  //   fetch(BASE_URL + "signees")
  //     .then(response => response.json())
  //     .then(data => saveSignees(data))
  // }

  // const saveSignees = (data) => {
  //   const parsedSignees = data.map(s => {
  //     return {
  //       first_name: s.first_name, 
  //       last_name: s.last_name, 
  //       address: s.address
  //     }
  //   })
  //   setSignees(parsedSignees)
  //   setLoaded(true)
  // }
  
  // const savePetitions = (data) => {
  //   console.log('data', data)
  //   const parsedPetitions = data.map(p => {
  //     const pet = {
  //       id: p.id, 
  //       description: p.description, 
  //       name: p.name, 
  //       signature_goal: p.signature_goal, 
  //       submit_to: p.submit_to
  //     }
  //     return pet 
  //   })
  //   setPetitions(parsedPetitions)
  // }

  const getPetitions = () => {
    fetch(BASE_URL + 'petitions')
        .then(response => response.json())
        .then(data => setPetitions(data))
        .then(result => setLoaded(true))
  }

  useEffect(() => {
    getPetitions() 
  },[])


  const sendProps = {app_url: BASE_URL, petitions}

  return (
    <div className="App">
      <header>
        <h1>{TITLE}</h1>
      </header>
      <main>
        { loaded ? <PetitionContainer {...sendProps} /> : null}
      </main>
    </div>
  );
}

export default App;
