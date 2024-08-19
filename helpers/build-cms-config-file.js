const yaml = require('js-yaml')
const fs = require(`fs-extra`)

/**
 * Script builds config.yml file for Netlify/Decap CMS
 * */

const CONFIG_FOLDER = './src/config/cms-config'
const COLLECTIONS_CONFIG_FOLDER = `${CONFIG_FOLDER}/collections`
const GLOBAL_CONFIG_FILE_NAME = `global.yaml`
const DESTINATION_FOLDER = `./static/admin`
const DESTINATION_CONFIG_FILE_NAME = `config.yml`
const COMMENT = `# This file is generated automatically. Do not edit it directly.
#
# To change CMS configuration edit files in "./src/config/cms-config" folder
# and run "yarn build-cms-config" command.\n
`

try {
  const globalConfig = yaml.load(
    fs.readFileSync(`${CONFIG_FOLDER}/${GLOBAL_CONFIG_FILE_NAME}`, 'utf8')
  )
  const collectionsConfig = fs
    .readdirSync(COLLECTIONS_CONFIG_FOLDER)
    .map((file) => yaml.load(fs.readFileSync(`${COLLECTIONS_CONFIG_FOLDER}/${file}`, 'utf8')))

  const configYaml = yaml.dump({
    ...globalConfig,
    collections: collectionsConfig,
  })

  fs.writeFileSync(`${DESTINATION_FOLDER}/${DESTINATION_CONFIG_FILE_NAME}`, COMMENT + configYaml)
} catch (error) {
  throw new Error('Unable to create CMS configuration file -> ' + error)
}
