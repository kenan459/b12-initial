import config from '@data/settings.yml'

type TProps = {
  active: boolean
  text: string
  cta_text: string
  cta_url: string
  secondary_cta_text?: string
  secondary_cta_url?: string
  background_color?: string
}

export const useAnnouncementBannerConfig = () => {
  const bannerConfig: TProps = config.announcement_banner

  return {
    active: bannerConfig.active,
    text: bannerConfig.text,
    cta_text: bannerConfig.cta_text,
    cta_url: bannerConfig.cta_url,
    secondary_cta_text: bannerConfig.secondary_cta_text || '',
    secondary_cta_url: bannerConfig.secondary_cta_url || '',
    background_color: bannerConfig.background_color || '#D5D1FC',
  }
}
