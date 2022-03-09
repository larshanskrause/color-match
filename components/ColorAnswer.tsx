import chroma from "chroma-js"

export interface ColorAnswerProps {
    color: chroma
    answer: any
}

const ColorAnswer = (props: ColorAnswerProps) => {
    const { color, answer } = props

    return (
        <div
            onClick={answer}
            className="w-40 h-40 bg-blue-500 mx-6"
            style={{ backgroundColor: color }}
        >
            {/* value: {Math.round(colors[1]?.luminance() * 100) / 100} */}
        </div>
    )
}

export default ColorAnswer
