import React, { useState, useRef } from 'react';




function Stopwatch() {

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const startWatch = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const pauseWatch = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
    }
    const resetWatch = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }


    const FormatTimer = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    const red = {
        color: 'red',
    }
    const green = {
        color: 'green',
    }
    const blue = {
        color: 'blue',
    }
    return (
        <>

            <section>
                <h2>StopWatch</h2>
                <p>{FormatTimer()}</p>


                <button style={red} onClick={startWatch}>{isActive}Start</button>

                <button style={green} onClick={pauseWatch}>{isPaused}Pause</button>


                <button style={blue} onClick={resetWatch}>reset</button>

            </section>
        </>
    );
}
















export default Stopwatch