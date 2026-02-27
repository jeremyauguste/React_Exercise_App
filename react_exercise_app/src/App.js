import React, { useEffect, useState } from 'react'
import repetition from './components/RepetitionExercise/index.js'
import duration from './components/DurationExercise/index.js'
import DurationExercise from './components/DurationExercise/index.js';
import RepetitionExercise from './components/RepetitionExercise/index.js';


function App() {
  let exerciseList = [
    'Running',
    'Planks',
    'Jumping Jacks',
    'Push Ups',
    'Squats'
  ]

  const [header, setHeader] = useState("Choose an exercise!");


  const exercises = exerciseList.map((item, i) => {
    return (
      <div>
        <button key={i} onClick={() => { setHeader(item) }}>
          {item}
        </button>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>{header}</h1>
      <div>
        {exerciseList.includes(header) ? null : <p>{exercises}</p>}
        {['Running', 'Planks'].includes(header) ? <DurationExercise setHeader={setHeader} /> : null}
        {['Jumping Jacks', 'Squats', 'Push Ups'].includes(header) ? <RepetitionExercise setHeader={setHeader} /> : null}
      </div>
    </div>
  )
}



export default App;
