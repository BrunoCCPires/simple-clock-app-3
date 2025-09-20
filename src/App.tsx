import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cookies, setCookies] = useState(() => {
    const saved = localStorage.getItem('cookies')
    return saved ? parseInt(saved) : 0
  })
  const [cps, setCps] = useState(() => {
    const saved = localStorage.getItem('cps')
    return saved ? parseInt(saved) : 0
  })
  const [autoClickerCost, setAutoClickerCost] = useState(() => {
    const saved = localStorage.getItem('autoClickerCost')
    return saved ? parseInt(saved) : 10
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(c => c + cps)
    }, 1000)
    return () => clearInterval(interval)
  }, [cps])

  useEffect(() => {
    localStorage.setItem('cookies', cookies.toString())
    localStorage.setItem('cps', cps.toString())
    localStorage.setItem('autoClickerCost', autoClickerCost.toString())
  }, [cookies, cps, autoClickerCost])

  const handleClick = () => {
    setCookies(cookies + 1)
  }

  const buyAutoClicker = () => {
    if (cookies >= autoClickerCost) {
      setCookies(cookies - autoClickerCost)
      setCps(cps + 1)
      setAutoClickerCost(Math.floor(autoClickerCost * 1.15))
    }
  }

  return (
    <div className="cookie-clicker">
      <h1>Cookie Clicker</h1>
      <div className="stats">
        <p>Cookies: {cookies}</p>
        <p>Cookies per second: {cps}</p>
      </div>
      <button className="cookie-button" onClick={handleClick}>
        🍪
      </button>
      <div className="shop">
        <h2>Shop</h2>
        <button 
          onClick={buyAutoClicker}
          disabled={cookies < autoClickerCost}
          className="shop-button"
        >
          Buy Auto Clicker (Cost: {autoClickerCost} cookies)
        </button>
      </div>
    </div>
  )
}

export default App