import config from '@data/settings.yml'

type TProps = {
  webinar_date: string
}

export const useSitewideSettings = () => {
  const generalConfig: TProps = config.general

  return {
    webinarDate: generalConfig.webinar_date,
  }
}
