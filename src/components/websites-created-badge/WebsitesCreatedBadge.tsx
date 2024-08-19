import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'

import Text from '@components/text/Text'
import Icon from '@components/icon/Icon'

import IconWebsite from '@images/icons/approveandlaunch.inline.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 18px;
  line-height: 18px;
  margin: 0;

  ${mq['md']} {
    font-size: 20px;
    line-height: 20px;
  }
`

const Subtitle = styled(Text)`
  color: ${theme.colors.text.light};
  line-height: 1;
  margin: 0;

  ${mq['md']} {
    line-height: 1;
  }
`

const WebsitesCreatedBadge = () => (
  <Wrapper>
    <Icon light size="sm">
      <IconWebsite />
    </Icon>
    <Content>
      <Title>250K+</Title>
      <Subtitle small>websites created</Subtitle>
    </Content>
  </Wrapper>
)

export default WebsitesCreatedBadge
