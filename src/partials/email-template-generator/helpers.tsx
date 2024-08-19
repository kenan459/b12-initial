import { makeGeneratorRequest } from '../slogan-generator/helpers'
import { TFormInfo } from '../slogan-generator/types'

export const generateEmail = async (formInfo: TFormInfo) => {
  const emailGeneratorUrl = 'https://b12.io/lead_tools/generate_email/'
  return await makeGeneratorRequest(formInfo, emailGeneratorUrl)
}
