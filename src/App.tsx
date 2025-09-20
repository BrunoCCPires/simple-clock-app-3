import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [times, setTimes] = useState({
    brazil: new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }),
    usa: new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimes({
        brazil: new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }),
        usa: new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="clocks-container">
      <h1>World Clocks</h1>
      
      <div className="clock-card">
        <h2>São Paulo, Brazil</h2>
        <div className="clock">{times.brazil}</div>
      </div>

      <div className="clock-card">
        <h2>US West Coast</h2>
        <div className="clock">{times.usa}</div>
      </div>
    </div>
  )
}

export default App