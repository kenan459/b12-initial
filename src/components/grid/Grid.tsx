/** LEGACY */
import { theme } from '@styles/theme'

// Types
import { Props } from './types'

// Styles
import { GridWrapper } from './Grid.styles'

const Grid = ({
  className = '',
  children = null,
  colsXs = 1,
  colsSm = 1,
  colsMd = 3,
  colsLg = 3,
  colsXl = 3,
  gapXs = theme.spacing.gutter,
  gapSm = theme.spacing.gutter,
  gapMd = theme.spacing.gutter,
  gapLg = theme.spacing.xlarge,
  gapXl = theme.spacing.xlarge,
}: Props) => (
  <GridWrapper
    className={className}
    colsXs={colsXs}
    colsSm={colsSm}
    colsMd={colsMd}
    colsLg={colsLg}
    colsXl={colsXl}
    gapXs={gapXs}
    gapSm={gapSm}
    gapMd={gapMd}
    gapLg={gapLg}
    gapXl={gapXl}
  >
    {children}
  </GridWrapper>
)

export default Grid
