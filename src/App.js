import React, {useState, useEffect} from 'react';
import PetitionContainer from './components/PetitionsContainer'


function App() {
  const TITLE = `Rise above`
  const BASE_URL = `http://localhost:3000/`

  const [petitions, setPetitions] = useState([])
  const [loaded, setLoaded] = useState(false)

  function getPetitions(){
    fetch(BASE_URL + 'petitions')
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
      setPetitions(data)
      setLoaded(true)
      return data})
  }
  
  useEffect(getPetitions,[])

  const sendProps = {app_url: BASE_URL, petitions}

  console.log('render')
  return (
    <div className="App">
      <header>
        <h1>{TITLE}</h1>
      </header>
      <main>
      { loaded ? <PetitionContainer {...sendProps} /> : "no content"}
      </main>
    </div>
  );
}

export default App;
