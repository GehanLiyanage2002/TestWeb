import { useState } from 'react'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Footer'
import Body from './assets/Components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="wrapper">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
