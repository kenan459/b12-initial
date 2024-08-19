// Images
declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.jpeg' {
  const content: any
  export default content
}

declare module '*.webp' {
  const content: any
  export default content
}

declare module '*.mp4' {
  const content: any
  export default content
}

// YAML data
declare module '*.yaml' {
  const data: any
  export default data
}

declare module '*.yml' {
  const data: any
  export default data
}

type B12Context = {
  trackingId: string
  snowplowAppId: string
  client_team_member: object
  experiments?: {
    [key: string]: Experiment
  }
}

type Experiment = {
  slug: string
  active: boolean
  created_at: string
  started_at: string
  ended_at: string | null
  group: {
    slug: string
    control: boolean
    winner: boolean
    data: object
  }
}

declare const b12Context: B12Context

interface Window {
  readonly b12Context: B12Context
}
