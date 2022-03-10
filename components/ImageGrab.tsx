import { useEffect, useRef, useState } from "react"
import testImage from "../assets/images/test.jpg"
import colorGrab from "../utils/color-grab"
import chroma from "chroma-js"

const ImageGrab = (props) => {
    const imageRef = useRef()
    const container = useRef()
    const [color, setColor] = useState(chroma.random())
    const size = { width: 32, height: 32 }
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [grayscale, setGrayscale] = useState(false)

    useEffect(() => {
        const newColor = colorGrab(imageRef.current, size, position, grayscale)
        setColor(chroma(newColor))
    }, [imageRef, position, grayscale])

    const handleMouseMove = ({ clientX, clientY }) => {
        setPosition({ x: clientX, y: clientY })
    }

    useEffect(() => {
        if (typeof container.current === "undefined") {
            return
        }
        container.current.addEventListener("mousemove", handleMouseMove)
        return () => {
            container.current.removeEventListener("mousemove", handleMouseMove)
        }
    })

    return (
        <div>
            <div className="relative cursor-none" ref={container}>
                <div
                    style={{
                        ...size,
                        backgroundColor: color.hex(),
                        left: position.x,
                        top: position.y,
                    }}
                    className="absolute rounded-full border-2 border-dashed z-10"
                ></div>
                <img
                    src={testImage.src}
                    ref={imageRef}
                    className={grayscale ? "filter grayscale" : ""}
                />
            </div>
            <div className="m-2 flex justify-between">
                <div>
                    <div className="flex items-center">
                        <div
                            className="w-12 h-12"
                            style={{
                                backgroundColor: color.hex(),
                            }}
                        ></div>
                        <div className="ml-2 text-xs">
                            <p>{color.css("hsl")}</p>
                            <p>
                                Value: {Math.round(color.hsv()[2] * 100) / 100}
                            </p>
                            <p>
                                Luminance:{" "}
                                {Math.round(color.luminance() * 100) / 100}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div
                            className="w-12 h-12"
                            style={{
                                backgroundColor: chroma.hsv(
                                    0,
                                    0,
                                    Math.round(color.hsv()[2] * 10) / 10
                                ),
                            }}
                        ></div>
                        <div className="ml-2 text-xs">
                            <p>
                                Value scale:{" "}
                                {Math.abs(Math.round(color.hsv()[2] * 10))}
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setGrayscale(!grayscale)}
                    title="refresh"
                    className="bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer self-center"
                >
                    Toggle grayscale
                </div>
            </div>
        </div>
    )
}

export default ImageGrab
