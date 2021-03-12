import React, { useState, useRef } from 'react';




function Stopwatch() {

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const [timer2, setTimer2] = useState(0)
    const [isActive2, setIsActive2] = useState(false)
    const [isPaused2, setIsPaused2] = useState(false)
    const countRef2 = useRef(null)
    const [res, setRes] = useState([])





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

    const startWatch2 = () => {
        setIsActive2(true)
        setIsPaused2(true)
        countRef2.current = setInterval(() => {
            setTimer2((timer2) => timer2 + 1)
        }, 1000)
    }

    const pauseWatch2 = () => {
        clearInterval(countRef2.current)
        setIsPaused2(false)
    }

    const resetWatch = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
        clearInterval(countRef2.current)
        setIsActive2(false)
        setIsPaused2(false)
        setTimer2(0)
    }

    // const resetWatch2 = () => {
    //     clearInterval(countRef2.current)
    //     setIsActive2(false)
    //     setIsPaused2(false)
    //     setTimer2(0)
    // }


    const FormatTimer = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    const FormatTimer2 = () => {

        const getSeconds = `0${(timer2 % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer2 / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer2 / 3600)}`.slice(-2)
        const part = `${getHours} : ${getMinutes} : ${getSeconds}промежуток времени..`

        if (isActive2) {
            return res.push(part)
        }

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


                <button style={red} onClick={() => { startWatch(); pauseWatch2(); FormatTimer2(); }}>{isActive && isPaused2}Start</button>
                <button style={green} onClick={() => { pauseWatch(); startWatch2(); }}>{isPaused && isActive2}Pause</button>
                <button style={blue} onClick={resetWatch}>reset</button>

                <div>
                    {res.map((item) => <div >{item}</div>)}
                </div>




            </section>
        </>
    );
}
















export default Stopwatch