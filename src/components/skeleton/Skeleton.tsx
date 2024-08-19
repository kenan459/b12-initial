import styled from '@emotion/styled'
import { mq } from '@styles/theme'

type TSkeleton = {
  loaded: boolean
  children: React.ReactNode
  backgroundColor?: string
  foregroundColor?: string
  width?: string
  height?: string
  mobileHeight?: string
}

type TSkeletonContainer = Omit<TSkeleton, 'loaded' | 'children'>

const SkeletonContainer = styled.div<TSkeletonContainer>`
  background: linear-gradient(
    -45deg,
    ${({ backgroundColor }) => backgroundColor || '#ddd'},
    ${({ foregroundColor }) => foregroundColor || '#eee'},
    ${({ backgroundColor }) => backgroundColor || '#ddd'},
    ${({ foregroundColor }) => foregroundColor || '#eee'}
  );
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  display: inline-flex;
  border-radius: 4px;
  min-width: ${({ width }) => width || '150px'};
  min-height: ${({ mobileHeight }) => mobileHeight || '40px'};

  ${mq['md']} {
    min-height: ${({ height }) => height || '40px'};
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const Skeleton = ({
  loaded = false,
  children,
  backgroundColor,
  foregroundColor,
  width,
  height,
}: TSkeleton) => {
  if (loaded) {
    return children
  }

  return (
    <SkeletonContainer
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      width={width}
      height={height}
    />
  )
}

export default Skeleton
