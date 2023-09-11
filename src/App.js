import React from 'react'
import List from './List'
import Data from './Data'
import { useState } from 'react'
function App() {
  const [item, setItem] = useState(Data)
  return (
    <main>
      <section className="container">
        <h3>{item.length} Birthday today</h3>
        <List item={item}/>
        
        <button onClick={() => setItem([])} >clear All</button>
      </section>
    </main>
  )
}

export default App
