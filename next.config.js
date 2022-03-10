const prod = process.env.NODE_ENV === "production"

module.exports = {
    outDir: "docs",
    assetPrefix: prod ? "https://larshanskrause.github.io/color-match/" : "",
}
