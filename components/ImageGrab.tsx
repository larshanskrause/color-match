import { useEffect, useRef, useState } from "react"
import testImage from "../assets/images/test.jpg"
import colorGrab from "../utils/color-grab"
import chroma from "chroma-js"

const ImageGrab = (props) => {
    const imageRef = useRef()
    const [color, setColor] = useState("#ff0000")
    const size = { width: 50, height: 50 }
    const position = { x: 50, y: 200 }

    useEffect(() => {
        // const c = imageRef.current
        // const ctx = c.getContext("2d")
        // const img = document.getElementById("image")
        // ctx.drawImage(img, 0, 0, 100, (100 * img.height) / img.width)
        const newColor = colorGrab(imageRef.current, size, position)
        console.log(color)
        setColor(chroma(newColor).hex())
    }, [imageRef])

    return (
        <div className="relative">
            {/* <canvas ref={imageRef} /> */}
            <div
                style={{
                    ...size,
                    backgroundColor: color,
                    left: position.x,
                    top: position.y,
                }}
                className="bg-reg-500 absolute"
            ></div>
            {/* <img src={testImage.src} id="image" /> */}
            <img src={testImage.src} ref={imageRef} />
        </div>
    )
}

export default ImageGrab
