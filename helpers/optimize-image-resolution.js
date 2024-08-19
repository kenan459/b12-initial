const sharp = require(`sharp`)
const glob = require(`glob`)
const fs = require(`fs-extra`)

const matches = glob.sync(`./{src,assets}/{img,uploads,images}/**/*.{png,jpg,jpeg}`)
const MAX_WIDTH = 2000

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match)
    const info = await stream.metadata()

    if (info.width < MAX_WIDTH) {
      return
    }

    const optimizedName = match.replace(/(\..{3,4})$/, (match, ext) => `${match}-optimized${ext}`)

    await stream.resize(MAX_WIDTH).toFile(optimizedName)

    return fs.rename(optimizedName, match)
  })
)
