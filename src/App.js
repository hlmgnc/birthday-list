import React, { useState } from 'react'
import './App.css'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays to Celebrate</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>CLEAR LIST</button>
      </section>
    </main>
  )
}

export default App
