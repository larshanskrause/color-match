import chroma from "chroma-js"

export interface HistoryProps {
    history: any[]
}

const ColorEntry = ({ color, correct = false }) => {
    return (
        <div
            className={
                "w-4 h-4 mr-1 mb-1 " +
                (correct ? "border-2 border-green-500" : "")
            }
            style={{ backgroundColor: color }}
        ></div>
    )
}

const History = (props: HistoryProps) => {
    const { history } = props

    return (
        <div>
            <p className="mb-2">History</p>
            {history.map(({ colors, correctAnswer, myAnswer }, index) => {
                return (
                    <div className="flex" key={index}>
                        <p className="text-black w-4 h-4 mr-1 -mt-1">
                            {myAnswer && correctAnswer
                                ? "✓"
                                : !myAnswer && !correctAnswer
                                ? "✓"
                                : "𐄂"}
                        </p>
                        <ColorEntry color={colors[0]} correct={correctAnswer} />
                        <ColorEntry
                            color={colors[1]}
                            correct={!correctAnswer}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default History
