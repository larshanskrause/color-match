export const getDifficultyFactor = (
    startingLuminance: number,
    difficulty: number
) => {
    let pos = 0
    while (pos === 0) {
        pos = Math.round((Math.random() - 0.5) * 2)
    }
    const factor = (0.05 / (difficulty + 1)) * pos
    const newLuminance = startingLuminance - factor
    const difference = startingLuminance - newLuminance
    // console.log({ factor, newLuminance, pos })

    return newLuminance
}
