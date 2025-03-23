import { useState } from 'react'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Footer'
import Body from './assets/Components/Body/Body'

function App() {
  

  return (
    <>
      <div id="wrapper">
        <Header />
        <Body>
        <button>Click Here</button>
        </Body>

        <Body>
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Enim laudantium voluptates 
            molestiae quia consectetur, itaque in quo non. 
            Id beatae nobis omnis alias molestias ullam asperiores 
            voluptatem debitis autem sit.</p>
        </Body>
      </div>
    </>
  )
}

export default App
