import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './assets/cal.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='navBar flex gap-10 border-2 border-red-500 h-14 justify-center items-center'   >
      <a href="/"> 
        <img src={Logo} alt="Logo" />
      </a>
      
      <div className='flex gap-12 px-20'>
      <p>Soution</p>
      <p>Enterprise</p>
      <p>Developer</p>
      <p>Resources</p>
      <p>Pricing</p>
      </div>
      
      <div className='flex gap-8'>
       <h3>Sign in</h3>
       <h3>Get started</h3>
      </div>
      
   </div>
    </>
  )
}

export default App
