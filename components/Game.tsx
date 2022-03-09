import chroma from "chroma-js"
import { useCallback, useEffect, useRef, useState } from "react"
import ColorAnswer from "../components/ColorAnswer"
import History from "../components/History"
import { getDifficultyFactor } from "../utils/difficulty"

const Game = () => {
    const [history, setHistory] = useState([])
    const [colors, setColors] = useState([])
    const [score, setScore] = useState(0)
    const [tries, setTries] = useState(0)
    const [difficulty, setDifficulty] = useState(0)

    const refresh = () => {
        const color1 = chroma.random()
        const color2 = chroma
            .random()
            .luminance(getDifficultyFactor(color1.luminance(), difficulty))

        setColors([color1, color2])
    }

    const answer = (index: number) => {
        const correctAnswer = colors[1].luminance() > colors[0].luminance()

        if ((correctAnswer && index) || (!correctAnswer && !index)) {
            setScore(score + 1)
        }

        setTries(tries + 1)
        setHistory([{ colors, correctAnswer, myAnswer: index }, ...history])
        refresh()
    }

    const reset = () => {
        setHistory([])
        setScore(0)
        setTries(0)
        refresh()
    }

    const chooseDifficulty = (diff) => {
        setDifficulty(diff)
        reset()
    }

    useEffect(() => {
        refresh()
    }, [])

    const handler = ({ key }) => {
        if (key === "1") {
            answer(0)
            return
        }
        if (key === "2") {
            answer(1)
            return
        }
    }

    useEffect(() => {
        if (typeof window === "undefined") {
            return
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    })

    return (
        <div className="p-6">
            <h1>Which color has more luminance?</h1>
            <p>Score: {score}</p>
            <p>Tries: {tries}</p>
            <div className="flex">
                <ColorAnswer answer={() => answer(0)} color={colors[0]} />
                <ColorAnswer answer={() => answer(1)} color={colors[1]} />
                <History history={history} />
            </div>
            <div className="mt-4">
                <div
                    onClick={refresh}
                    title="refresh"
                    className="bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer"
                >
                    Randomize
                </div>
                <div
                    onClick={reset}
                    title="refresh"
                    className="bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer"
                >
                    Reset
                </div>
                <div
                    onClick={() => chooseDifficulty(0)}
                    title="refresh"
                    className={
                        `bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer` +
                        (difficulty === 0
                            ? `border border-2 border-blue-900`
                            : "")
                    }
                >
                    Easy
                </div>
                <div
                    onClick={() => chooseDifficulty(1)}
                    title="refresh"
                    className={
                        `bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer` +
                        (difficulty === 1
                            ? `border border-2 border-blue-900`
                            : "")
                    }
                >
                    Medium
                </div>
                <div
                    onClick={() => chooseDifficulty(2)}
                    title="refresh"
                    className={
                        `bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer` +
                        (difficulty === 2
                            ? `border border-2 border-blue-900`
                            : "")
                    }
                >
                    Hard
                </div>
            </div>
        </div>
    )
}

export default Game
