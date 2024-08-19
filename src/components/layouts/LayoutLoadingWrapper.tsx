import styled from '@emotion/styled'

export const LayoutLoadingWrapper = styled.div<{ isLoading: boolean }>`
  position: relative;

  &::after {
    display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1000;
  }
`
