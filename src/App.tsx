import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(555)

  return (
    <div className="card">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(555)}>
        Reset to 555
      </button>
    </div>
  )
}

export default App