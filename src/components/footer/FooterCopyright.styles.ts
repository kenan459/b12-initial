import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

import B12Logo from '../../images/logo-b12.inline.svg'

export const Wrapper = styled.div`
  padding: 30px 0 0;
  border-top: 1px solid ${theme.palette.gray.light};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  ${mq['md']} {
    flex-wrap: nowrap;
  }
`

export const WrapperSimple = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  ${mq['md']} {
    flex-wrap: nowrap;
  }
`

export const Logo = styled(B12Logo)`
  width: 53px;
  height: 24px;
  flex-shrink: 0;
  margin-right: 20px;
`

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  gap: 10px;
  font-size: ${theme.fontSizes.small};

  ${mq['md']} {
    flex-direction: row;
    align-items: center;
    width: auto;
    gap: 24px;
    order: 1;
  }
`

export const CopySimple = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  font-size: ${theme.fontSizes.small};
`

export const CopyText = styled.div`
  color: ${theme.palette.gray.dark};
  font-size: 14px;
  line-height: 20px;
`

export const Legal = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const LegalLink = styled.a`
  text-decoration: none;
  color: ${theme.palette.gray.dark};
  font-size: 14px;
  line-height: 20px;

  &:hover {
    text-decoration: underline;
    color: ${theme.palette.gray.dark};
  }
`

export const SocialLinksWrapper = styled.div`
  ${mq['md']} {
    order: 2;
  }
`
