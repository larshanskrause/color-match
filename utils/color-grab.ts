import React from "react"

interface Size {
    width: number
    height: number
}
interface Position {
    x: number
    y: number
}

export default function colorGrab(imgEl, size: Size, position: Position) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement("canvas"),
        context = canvas.getContext && canvas.getContext("2d"),
        data,
        width,
        height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0

    if (!context) {
        return defaultRGB
    }

    canvas.height = imgEl.height
    canvas.width = imgEl.width

    context.drawImage(imgEl, 0, 0, imgEl.height, imgEl.width)

    try {
        data = context.getImageData(
            position.x,
            position.y,
            size.width,
            size.height
        )
    } catch (e) {
        // /* security error, img on diff domain */ alert("x")
        return defaultRGB
    }

    length = data.data.length

    while ((i += blockSize * 4) < length) {
        ++count
        rgb.r += data.data[i]
        rgb.g += data.data[i + 1]
        rgb.b += data.data[i + 2]
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count)
    rgb.g = ~~(rgb.g / count)
    rgb.b = ~~(rgb.b / count)

    return rgb
}
