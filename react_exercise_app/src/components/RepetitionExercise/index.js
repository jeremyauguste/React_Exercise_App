import { useState, useEffect } from 'react'

function RepetitionExercise({ setHeader }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Reps: {count}</h3>
            <button onClick={() => { setCount(c => c + 1) }}>Complete Rep</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
            <button onClick={() => { setHeader("Choose an exercise!"); setCount(0) }}>Return</button>
        </div>
    )
}

export default RepetitionExercise
