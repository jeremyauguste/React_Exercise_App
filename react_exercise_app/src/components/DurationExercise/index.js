import { useEffect, useState } from "react";


export default function DurationExercise({ setHeader }) {
    const [ms, setMs] = useState(0);
    const [startDate, setStartDate] = useState();
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setRunning(r => {
                if (r) {
                    setStartDate(sd => {
                        setMs(Date.now() - sd);
                        return sd;
                    })
                }
                return r;
            })
        }, 0);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {


        return () => {

        }
    }, [running]);


    return (
        <>
            <h3>Timer: {String(Math.floor(ms / 1000 / 60) % 60).padStart(2, '0') + ":" + String(Math.floor(ms / 1000) % 60).padStart(2, '0') + "." + String(ms % 1000).padStart(3, '0').substring(0, 3)}</h3>
            <button onClick={() => {
                if (!running) {
                    setStartDate(Date.now())
                }
                else {
                    setMs(0);
                }

                setRunning(r => !r);

            }}>{!running ? "start timer" : "reset"}</button>
            <button onClick={() => { setHeader("Choose an exercise!") }}>Return</button>
        </>
    )
}

