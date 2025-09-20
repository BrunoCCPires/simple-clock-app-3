import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="clock-container">
      <h1>Current Time</h1>
      <div className="clock">
        {time.toLocaleTimeString()}
      </div>
      <div className="date">
        {time.toLocaleDateString()}
      </div>
    </div>
  )
}

export default App