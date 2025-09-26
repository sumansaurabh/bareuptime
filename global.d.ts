/* Global type declarations to silence imports for CSS and static assets */

declare module '*.css'
declare module '*.scss'
declare module '*.sass'

declare module '*.svg' {
  import * as React from 'react'
  const src: string
  export default src
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.webp'

declare module '*.ico'

declare module '*.avif'

declare module '*.bmp'

declare module '*.mp4'

declare module '*.webm'

declare module '*.json' {
  const value: any
  export default value
}

export {}
