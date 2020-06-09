import React, {useState, useEffect} from 'react';
import PetitionContainer from './components/PetitionsContainer'


function App() {
  const TITLE = `Rise`
  const BASE_URL = `http://localhost:3000/`

  const [petitions, setPetitions] = useState([])
  const [loaded, setLoaded] = useState(false)

  function getPetitions(){
    fetch(BASE_URL + 'petitions')
    .then(response => response.json())
    .then(data => {
      setPetitions(data)
      setLoaded(true)
      return data})
  }
  
  useEffect(getPetitions,[])

  const sendProps = {app_url: BASE_URL, petitions}

  return (
    <div className="App">
      <header>
        <h1>{TITLE}</h1>
        <h3>A place where people can come together to create change</h3>
      </header>
      <main>
      { loaded ? <PetitionContainer {...sendProps} /> : "no content"}
      </main>
    </div>
  );
}

export default App;
