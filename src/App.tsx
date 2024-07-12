import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pet } from './services/generated/petstore'
import { PetTable } from './components/PetTable'
import { PetstoreServiceContext, usePetstoreService } from './services/petstore'

function App() {
  const petstoreService = usePetstoreService();
  const [count, setCount] = useState(0)
  const [pets, setPets] = useState<Array<Pet>>([])

  const fetchPets = async () => {
    const pets = await petstoreService.petApi.findPetsByStatus({
      status: ["available"]
    })
    setPets(pets);
  }

  useEffect(() => {
    fetchPets()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h2>Top 10 Available Pets</h2>
        <PetTable pets={pets.slice(0, 10)} />
      </div>
    </>
  )
}

export default App
